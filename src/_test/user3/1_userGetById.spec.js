
const { expect } = require('chai');
const {userGetByIdQ} = require('./queries3');
const gqlRequest3 = require ('./gqlRequest3')
const {user3}=require('./data3');



let respData = null;
let postData = null


describe('USER GET BY ID1', () => {
    describe('USER GET BY ID POSITIVE', () => {
        it('user get by id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    userId: process.env.USER_ID
                }
            }

            gqlRequest3(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
                    expect(respData.firstName).eq(user3.userInput.firstName)
                    done()

                })
        })


    })
})


