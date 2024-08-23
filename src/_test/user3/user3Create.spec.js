
const {expect} = require('chai')
const {userCreateQ3} = require('./queries3')
const{user3} = require('./data3')
const gqlRequest3 = require('./gqlRequest3')
const mongoose = require('mongoose')



let respData = null
let postData = null



describe ('USER CREATE3',()=> {
    describe ('USER CREATE POSITIVE3', () => {
        it ('user create all fields3', (done) => {
            postData = {
                query: userCreateQ3,
                variables : user3
            }

            gqlRequest3(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userCreate
                    console.log(respData);
                    expect(respData.firstName).to.equal(user3.userInput.firstName)
                    done()

                })
        })
    })
})
