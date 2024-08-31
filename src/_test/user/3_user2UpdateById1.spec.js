const { expect } = require('chai');
const gqlRequest = require('../gqlRequest');
const user= require('./data');
const userUpdateByIdQ = require('./queries');



let respData = null
let postData = null

describe('User3 Updated ById', () => {
    describe('update by id()', () => {
        it('user updated by id', (done) => {
            postData= {
                query: `mutation UserUpdateById($userInput: UserFields) {
  userUpdateById(userInput: $userInput) {
    _id
    firstName
    lastName
  }
}`,
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
                    expect(respData.firstName).eq('UpdatedFirstName');
                    done()


                })


















        })





    })





})
