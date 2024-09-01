const {expect} = require('chai')
const {userCreateQ4} = require('./queries4')
const{user4} = require('./data4')
const gqlRequest4 = require('./gqlRequest4')



let respData = null
let postData = null
describe ('USER CREATE4',()=> {
    describe ('USER CREATE POSITIVE', () => {
        it ('user create all fields', (done) => {
            postData = {
                query: userCreateQ4,
                variables : user4
            }

            gqlRequest4(postData)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userCreate
                    console.log(respData);
                    expect(respData.firstName).eq(user4.userInput.firstName)
                    done()

                })
        })
    })
})











































