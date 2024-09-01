const { expect } = require('chai');
const gqlRequest4 = require('./gqlRequest4');



let postData = null
let respData = null

describe('User Updated ById', () => {
    describe('user updated', () => {
        it('Should updated user', (done) => {
            postData = {
                query:`mutation UserUpdateById($userInput: UserFields) {
  userUpdateById(userInput: $userInput) {
    _id
    firstName
    lastName
  }
}` ,
                variables:{
                    userInput: {
                        firstName: 'UpdatedFirstName',
                        userId: process.env.USER_ID,
                    }
                }
            }
            gqlRequest4(postData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                respData = res.body.data.userUpdateById
                console.log(respData);
                expect(respData.firstName).eq('UpdatedFirstName');
                done()

            })






        })
    })
})