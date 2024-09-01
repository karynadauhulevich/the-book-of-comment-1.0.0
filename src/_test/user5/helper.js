const gqlRequest5 = require('./gqlRequest5');
const User = require('../../models/user');
const {userCreateQ5} = require('./queries5');
const {user5} = require('./data5');



let respData= null
let postData = null
process.env.NODE_ENV = null;

before('DELETE MANY',  ()=> {
    User.deleteMany({})
    console.log('users are deleted')
})

describe('User create helper', () => {
    it('Should create user', (done) => {
       postData ={
           query: userCreateQ5,
           variables: user5
       };
       gqlRequest5(postData)
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

