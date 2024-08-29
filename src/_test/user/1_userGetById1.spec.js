const { expect } = require('chai');
const { userGetByIdQ } = require('./queries');
const { user } = require('./data');
const gqlRequest = require ('../gqlRequest')



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

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
                    expect(respData.firstName).eq(user.userInput.firstName)
                    done()

                })
        })


    })
})





