const { expect } = require('chai');
const gqlRequest3 = require('./gqlRequest3');

let respData = null;
let postData = null;

describe('User3 Updated ById', () => {
    describe('update by id()', () => {
        it('user updated by id', (done) => {
            postData = {
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
            };

            gqlRequest3(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        console.error('Request Error:', err);
                        console.error('Response Body:', res.body);
                        return done(err);
                    }
                    respData = res.body.data.userUpdateById;
                    console.log('Response Data:', respData);
                    done();
                });
        });
    });
});
