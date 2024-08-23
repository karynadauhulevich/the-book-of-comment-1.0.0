const {expect} = require('chai')

const {userCreateQ1} = require('./queries2')
const{user2} = require('./data2')
const gqlRequest1 = require('./gqlRequest2')


let respData = null
let postData = null
describe ('USER CREATE2',()=> {
    describe ('USER CREATE POSITIVE', () => {
        it ('user create all fields', (done) => {
            postData = {
                query: userCreateQ1,
                variables : user2
            }

            gqlRequest1(postData)
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





