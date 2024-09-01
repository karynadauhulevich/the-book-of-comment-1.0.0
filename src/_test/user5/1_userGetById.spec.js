const { expect } = require("chai");
const { user5GetByIdQ, userCreateQ5} = require('./queries5');
const gqlRequest5 =require ('./gqlRequest5')
const {user5} = require('./data5')





let respData = null
let postData = null



describe('USER GET BY ID5', () => {
    it ('user get by id5', (done) =>{
            postData ={
                query : user5GetByIdQ,
                variables : {
                    userId: process.env.USER_ID
                }
            }

            gqlRequest5(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
                    expect(respData.firstName).eq(user5.userInput.firstName)
                    done()
                })
        })
    })












