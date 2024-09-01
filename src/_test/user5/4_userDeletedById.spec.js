const { expect } = require('chai');
const gqlRequest5 = require('./gqlRequest5.js');
const gqlRequest4 = require("../user4/gqlRequest4");

let respData = null
let postData = null

describe('User DeletedById', () => {
    describe('user deleted by id', () => {
        it('Should delete user', (done) => {

            postData={ query: `mutation UserDeleteById($userId: ID) {
  userDeleteById(userId: $userId)
}` ,
                variables: {
                userId: process.env.USER_ID
                }



            }
            gqlRequest5(postData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                respData = res.body.data.usersGetAll
                console.log('user deleted',respData)
                done()
            })
        })
    })
})