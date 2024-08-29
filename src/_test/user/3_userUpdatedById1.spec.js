const { expect } = require('chai');
const gqlRequest = require("../gqlRequest");
const {user} = require("./data");

let respData = null
let postData = null;

describe('User UpdatedById1', () => {
    describe('updateBYId1 positive', () => {
        it('update by id', (done) => { // Добавьте 'done' сюда
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
                        userId: process.env.USER_ID,
                        firstName: 'userUpdated'
                    }
                }
            };

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userUpdateById;
                    console.log(respData);
                     expect(respData.firstName).eq('userUpdated')

                    done();
                });
        });
    });
});

