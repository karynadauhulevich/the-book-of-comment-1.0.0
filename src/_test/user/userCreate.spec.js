const { expect } = require('chai');
const { userCreateQ } = require('./queries');
const { user } = require('./data');
const gqlRequest = require('../gqlRequest');
const User = require('../../models/User');
const mongoose = require('mongoose');

let respData = null;
let postData = null;

before('deleteAllUsers', ()=>{
   User.deleteMany({})
})
describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TESTS', () => {
        it('user create all fields 1', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            };

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userCreate;
                    console.log(respData);
                    expect(respData.firstName).to.equal(user.userInput.firstName);
                    done();
                });
        });

        // This is the duplicated test case; you might want to remove it if it's redundant.
        it('user create all fields 2', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            };

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userCreate;
                    console.log(respData);
                    expect(respData.firstName).to.equal(user.userInput.firstName);
                    done();
                })
        });
        it('user create all fields 3', (done) => {
            postData = {
                query: userCreateQ,
                variables: user
            };

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userCreate;
                    console.log(respData);
                    expect(respData.firstName).to.equal(user.userInput.firstName);
                    done();
                });
        });
    });
});



