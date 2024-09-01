const chai = require('chai');
const gqlRequest5 = require('./gqlRequest5');
const{expect} = require('chai');

let postData=null
let respData = null




describe('User Updated ById', () => {
    describe('#update', () => {
        it('Should update the user by ID', (done) => {

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
                       userId: process.env.USER_ID,
                   }
               }

           }

           gqlRequest5(postData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                respData = res.body.data.userUpdateById
                console.log(respData)
                expect(respData.firstName).to.equal('UpdatedFirstName');
                done()
            })



        })
    })

})

