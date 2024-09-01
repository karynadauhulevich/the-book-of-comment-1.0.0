const { userCreateQ4 } = require('./queries4');
const { user4 } = require('./data4');
const gqlRequest4 = require('./gqlRequest4');
const User = require('../../models/User');


let respData = null;
let postData = null;
process.env.USER_ID = null

before('DELETE MANY', ()=>{
    User.deleteMany({})
    console.log('users are deleted')
})


describe('USER CREATE', () => {
    it('user create all fields - helper ', (done) => {
        postData = {
            query: userCreateQ4,
            variables: user4
        };

        gqlRequest4(postData)
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