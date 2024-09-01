const { expect } = require('chai');
const gqlRequest4 = require('./gqlRequest4');


let postData = null
let respData = null

describe('User deleted by id', () => {
    describe('#delete by id positive', () => {
        it ('should be able to delete a user with id positive', (done) => {

            postData = {
                query: `mutation UserDeleteById($userId: ID) {
  userDeleteById(userId: $userId)
}`,
                variables: {
                    userId: process.env.USER_ID
                }
            }

            gqlRequest4(postData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                respData = res.body.data.userDeleteById
                console.log('User Deleted Successfully')
                done()
            })



        })
    })

})