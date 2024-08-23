const { expect } = require("chai");
const { user2GetByIdQ, userCreateQ2} = require('./queries2');
const gqlRequest2 =require ('./gqlRequest2')
const {user2} = require('./data2')





let respData = null
let postData = null
let userID = null


describe('USER GET BY ID2', () => {
    describe ('USER GET BY ID POSITIVE',()  => {
        before ('user create', (done) =>{
            postData ={
                query : userCreateQ2,
                variables :user2



            }

            gqlRequest2(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    userID = res.body.data.userCreate._id
                    console.log('userID=',userID)

                    done()
                })
        })

        it ('user get by id', (done) =>{
            postData ={
                query : user2GetByIdQ,
                variables : {
                    userId: userID
                }
            }

            gqlRequest2(postData)
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
