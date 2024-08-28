const { expect } = require("chai");
const { user5GetByIdQ, userCreateQ5} = require('./queries5');
const gqlRequest5 =require ('./gqlRequest5')
const {user5} = require('./data5')





let respData = null
let postData = null
let userID = null


describe('USER GET BY ID5', () => {
    describe ('USER GET BY ID POSITIVE',()  => {
        before ('user create', (done) =>{
            postData ={
                query : userCreateQ5,
                variables :user5



            }

            gqlRequest5(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    userID = res.body.data.userCreate._id
                    console.log('userID=',userID)

                    done()
                })
        })

        it ('user get by id5', (done) =>{
            postData ={
                query : user5GetByIdQ,
                variables : {
                    userId: userID
                }
            }

            gqlRequest5(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
                    expect(respData._id).eq(userID)
                    done()
                })
        })
    })



})










