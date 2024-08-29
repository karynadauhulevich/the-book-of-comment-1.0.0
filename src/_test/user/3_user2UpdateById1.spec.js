
const gqlRequest = require('../gqlRequest');
const {expect} = require('chai');
let respData = null
let postData = null





describe('User UpdateByID2', () => {
    describe ('userUpdate - positive tests', () => {

        it ('should return updated user ', (done) => {
            postData = {
                query: `mutation UserUpdateById($userInput: UserFields) {
  userUpdateById(userInput: $userInput) {
    _id
    firstName
    
  }
}`,
                variables: {
                    userInput: {
                        userId: process.env.USER_ID,
                        firstName: 'userUpdated'
                    }

                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userUpdateById
                    console.log(respData);
                    expect(respData.firstName).equal('userUpdated')
                    done()


                })














        })















    })







})
