const{expect}=require('chai')
const gqlRequest = require('../gqlRequest')


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
                userInput: {
                userId: process.env.USER_ID
                }
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userDeleteById;
                    console.log(respData);
                    expect(respData).to.be.false;
                    done();





            })








        })




    })














})
