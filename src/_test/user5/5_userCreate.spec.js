const {expect} = require('chai')
const {userCreateQ5} = require('./queries5')
const{user5} = require('./data5')
const gqlRequest5 = require('./gqlRequest5')



let respData = null
let postData = null
describe ('USER CREATE5',()=> {
    describe ('USER CREATE POSITIVE', () => {
        it ('user create all fields', (done) => {
            postData = {
                query: userCreateQ5,
                variables : user5
            }

            gqlRequest5(postData)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userCreate
                    console.log(respData);
                    expect(respData.firstName).eq(user5.userInput.firstName)
                    done()

                })
        })
    })










    })













