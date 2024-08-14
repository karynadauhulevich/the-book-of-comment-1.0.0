const { expect } = require("chai");
const { userGetByIdQ } = require('./queries');
const { user } = require('./data');
const gqlRequest = require ('../gqlRequest')

let respData = null
let postData = null

describe('USER GET BY ID', () => {
    describe ('USER GET BY ID POSITIVE',()  => {
        it ('user get by id', (done) =>{
            postData ={
                query : userGetByIdQ,
                variables : {
                    userId: '66bc4d511490e9e8c7d9b65e'
}
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
                    expect(respData._id).eq('66bc4d511490e9e8c7d9b65e')

       done()
    })
    })
})



    })





