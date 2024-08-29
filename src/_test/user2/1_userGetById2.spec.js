const { expect } = require('chai');
const { user2GetByIdQ } = require('./queries2');
const { user2 } = require('./data2');
const gqlRequest2 = require ('./gqlRequest2')



let respData = null;
let postData = null


describe('USER GET BY ID2', () => {
    describe('USER GET BY ID POSITIVE', () => {
        it('user get by id2', (done) => {
            postData = {
                query: user2GetByIdQ,
                variables: {
                    userId: process.env.USER_ID2
                }
            }

            gqlRequest2(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
                    expect(respData.firstName).eq(user2.userInput.firstName)
                    done()

                })
        })


    })
})



