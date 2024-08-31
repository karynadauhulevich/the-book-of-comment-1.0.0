const {expect} = require('chai');
const gqlRequest3 = require('./gqlRequest3');
const gqlRequest = require("../gqlRequest");

let respData = null
let postData = null

describe('getAllUsers', () => {
    describe('GET ALL USERS', () => {
        it('returns all users', (done) => {
            postData ={
                query: `query UsersGetAll($amount: Int) {
  usersGetAll(amount: $amount) {
    lastName
    firstName
    _id
  }
}`,
                variables:{
                    userInput: {
                        amount: null
                    }
                }
            }
            gqlRequest3(postData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                respData = res.body.data.usersGetAll
                console.log(respData)
                done()




            })












        })













    })








})