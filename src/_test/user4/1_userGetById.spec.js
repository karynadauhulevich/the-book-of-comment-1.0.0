const { expect } = require('chai');
const gqlRequest4 = require('./gqlRequest4');
const {user4GetByIdQ} = require('./queries4');
const {user4} = require('./data4');

let respData=null
let postData = null


describe('get by ID4', () => {
    describe('USER GET BY ID positive', () => {
    it('user get by ID4', (done) => {
            postData= {
                query: user4GetByIdQ,
                variables: {
                    userId: process.env.USER_ID
                }
            }
            gqlRequest4(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
                    expect(respData.firstName).eq(user4.userInput.firstName)
                    done()






                    })










            })




})



        })























