const expect = require("chai")
const UserCreateQ4 = require("./queries4")
const user4 = require("./queries4")
const gqlRequest4 = require("./gqlRequest4")
const gqlRequest3 = require("../user3/gqlRequest3");

let postData = null
let respData = null



describe('User4Create', () => {
    describe ('User4Create Positive', () => {
        it ('user create all field', (done) => {
            postData = {
                queries :UserCreateQ4,
                variables: user4
            }
            gqlRequest4(postData)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body
                    console.log(respData);
                    //expect(respData.firstName).eq(user3.userInput.firstName)
                    done()

                })















        })




















    })




















})