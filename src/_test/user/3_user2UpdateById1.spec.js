const {expect} = require('chai').expect;
const gqlRequest = require('../gqlRequest');
const UserGetByIdQ = require('./queries');


let respData = null
let postData = null


describe('User Update ById 1', () => {
    describe('user Update ById - positive', () => {
        it('Should be able to update ById 1', (done) => {

            postData = {
                query: UserGetByIdQ,
                variables: {
                    userInput: {
                        firstName: 'UpdatedFirstName',
                        userId: process.env.USER_ID

                    }

                }

            }
            gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                respData = res.body.data.userUpdateById
                console.log(respData)
                done()






            })






        })


    })

})








































