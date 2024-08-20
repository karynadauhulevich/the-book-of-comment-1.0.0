const { expect } = require("chai");
const { userGetByIdQ, userCreateQ} = require('./queries');
const { user } = require('./data');
const gqlRequest = require ('../gqlRequest')

let respData = null
let postData = null
let userID = null

describe('USER GET BY ID', () => {
    describe ('USER GET BY ID POSITIVE',()  => {

        before('user create', (done) =>{
            postData ={
                query : userCreateQ,
                variables : user

            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    userID = res.body.data.userCreate._id
                    console.log('userID =', userID)

                    done()
                })
        })

        it ('user get by id', (done) =>{
            postData ={
                query : userGetByIdQ,
                variables :{userId : userID}
}

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
                    expect(respData._id).eq(userID)
                    done()
    })
    })
})



    })





