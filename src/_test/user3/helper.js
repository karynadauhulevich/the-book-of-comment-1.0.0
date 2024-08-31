const {expect} = require('chai')
const {userCreateQ3} = require('./queries3')
const{user3} = require('./data3')
const gqlRequest3 = require('./gqlRequest3')
const mongoose = require('mongoose')
const User = require("../../models/User");



let respData = null
let postData = null
process.env.USER_ID = null

before('DELETE MANY', ()=>{
    User.deleteMany({})
    console.log('users are deleted')
})


describe('USER CREATED', () => {
        it('user create HELPER', (done) => {
            postData = {
                query: userCreateQ3,
                variables: user3
            }

            gqlRequest3(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userCreate
                    process.env.USER_ID = respData._id
                    console.log('USER HAS BEEN CREATED', respData);
                    done()

                })
        })
    })
