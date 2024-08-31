const{expect}= require('chai')
const gqlRequest3 = require('./gqlRequest3')


let respData = null
let postData= null


describe('User delete 1', () => {
    describe('user delete positive ', () => {
        it('user deleted', (done) => {
            postData={
                query: `mutation UserDeleteById($userId: ID) {
  userDeleteById(userId: $userId)
} `,
                variables: {
                        userId: process.env.USER_ID

                }
            }
            gqlRequest3(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userDeleteById;
                    console.log(respData);
                    expect(respData).to.be.true;
                    done();





                })








        })




    })














})
