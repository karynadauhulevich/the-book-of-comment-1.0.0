const { userCreateQ2 } = require('./queries2');
const { user2 } = require('./data2');
const gqlRequest2 = require('./gqlRequest2');
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
            query: userCreateQ2,
            variables: user2
        };

        gqlRequest2(postData)
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

