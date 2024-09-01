const { expect } = require('chai');
const gqlRequest5 = require('./gqlRequest5');


let respData = null
let postData = null

describe('get All Users', () => {
    describe('get all users', () => {
        it ('should return the list of all users', () => {

            postData = {
                query: `query UsersGetAll($amount: Int) {
  usersGetAll(amount: $amount) {
    _id
    firstName
    lastName
  }
}`,
                variables: {
                    amount: null}
            }


            gqlRequest5(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.usersGetAll
                    console.log(respData)

                })


        })



    })

})