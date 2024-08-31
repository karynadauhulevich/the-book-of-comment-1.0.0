const {expect} = require('chai');
const gqlRequest = require('../gqlRequest');



let respData = null
let postData = null


describe('getAllUsers2', () => {
    describe('getAllUsers2-positive ', () => {
        it('Should return all users', (done) => {
            postData={
                query: `query UsersGetAll($amount: Int) {
  usersGetAll(amount: $amount) {
    lastName
    firstName
    _id
  }
}`,
                variables: {
                    amount: null
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.usersGetAll
                    console.log(respData);
                    done()





                })











        })













    })













})