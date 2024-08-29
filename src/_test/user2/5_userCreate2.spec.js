const {expect} = require('chai')
const {userCreateQ2} = require('./queries2')
const{user2} = require('./data2')
const gqlRequest2 = require('./gqlRequest2')


let respData = null
let postData = null
describe ('USER CREATE2',()=> {
    describe ('USER CREATE POSITIVE', () => {
        it ('user create all fields', (done) => {
            postData = {
                query: userCreateQ2,
                variables : user2
            }

            gqlRequest2(postData)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userCreate
                    console.log(respData);
                    expect(respData.firstName).eq(user2.userInput.firstName)
                    done()

                })
            })
         })
        })





