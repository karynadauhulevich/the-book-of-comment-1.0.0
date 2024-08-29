const { expect } = require('chai');
const gqlRequest = require('../gqlRequest');

let respData = null
let postData = null





describe('UserGetAll', () => {
    describe ('userGetAll - positive tests', () => {

        it ('should return userGetAll ', () => {
            postData = {
                 query: `query UsersGetAll($amount: Int) {
  usersGetAll(amount: $amount) {
    firstName
    lastName
    _id
  }
}`,
                 variables: {
                     amount:null
                 }

             }
             gqlRequest(postData)
                 .expect(200)
                 .end((err, res) => {
                     if (err) return done(err)
                     respData = res.body.data.usersGetAll
                     console.log(respData);
                    // expect(respData.length).equal(1)


                 })














        })















    })







})
