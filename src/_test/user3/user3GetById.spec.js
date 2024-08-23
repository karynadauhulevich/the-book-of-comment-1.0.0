const {expect} = require("chai")
const gqlRequest = require("./gqlRequest3");
const {userCreateQ3, userGetById3} = require("./queries3");
const {user3} = require("./data3");


let respData = null
let postData = null
let UserID = null

describe ('User3 GetById', () => {
    describe('GetById positive', () => {
        before('user create', (done) => {
            postData = {
                query: userCreateQ3,
                variables: user3
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    UserID = res.body.data.userCreate._id
                    done()
                })
        })

        it('user get by id3', (done) => {
            postData = {
                query: userGetById3,
                variables: {

                    userId: UserID
                }

            }

            gqlRequest(postData)

                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
expect(respData._id).eq(UserID)
                    done()
                })
        })
    })


})
