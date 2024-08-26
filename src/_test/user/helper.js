const { userCreateQ } = require('./queries');
const { user } = require('./data');
const gqlRequest = require('../gqlRequest');
const User = require('../../models/User');


let respData = null;
let postData = null;
process.env.USER_ID = null



before('DeleteMany', ()=>{
    User.deleteMany({})
    console.log('users are deleted')
})
describe('USER CREATE', () => {


        it('user create all fields - helper ', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            };

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userCreate;
                    process.env.USER_ID = respData._id;
                    console.log('TEST USER HAS BEEN CREATED',respData);
                    done();
                });
        });

    })