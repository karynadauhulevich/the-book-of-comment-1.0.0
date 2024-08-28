const { expect } = require('chai');
const gqlRequest4 = require('./gqlRequest4');
const {user4}= require('./data4')
const {userCreateQ4, user4GetByIdQ}= require('./queries4');
const {userGetByIdQ} = require("../user/queries");
const gqlRequest = require("../user3/gqlRequest3");

let respData=null
let postData = null
let UserId = null

describe('get by ID4', () => {
    describe ('USER GET BY ID4 POSITIVE',()=> {
        before('user create all fields', (done) => {
            postData = {
                query: userCreateQ4,
                variables : user4

            }
         gqlRequest4(postData)
            .expect(200)
             .end((err, res) => {
                 if(err) return done(err)
                 UserId = res.body.data.userCreate._id
                 done()




             })


        })
        it('user get by ID4', () => {
            postData= {
                query: user4GetByIdQ,
                variables: {
                    userId: UserId
                }
            }


            gqlRequest4(postData)

                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
                    expect(respData._id).eq(UserId)






                    })










            })








        })























})