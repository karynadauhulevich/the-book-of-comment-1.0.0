const { expect } = require('chai');
const { userCreateQ } = require('./queries');
const { user } = require('./data');
const gqlRequest = require ('../gqlRequest')


let respData = null
let postData = null

describe('USER CREATE' , () => {
    describe('USER CREATE - POSITIVE TESTS', () => {
        it('user create all fields', (done) => {
            postData = {
                query: userCreateQ,
                variables: user.userInput

            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body
                    console.log(respData);
                    //expect(respData).eq()
                    done()

                })
        })
    })
})