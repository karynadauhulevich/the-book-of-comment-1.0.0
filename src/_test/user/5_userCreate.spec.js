const { expect } = require('chai');
const { userCreateQ } = require('./queries');
const { user } = require('./data');
const gqlRequest = require('../gqlRequest');
const User = require('../../models/User');
const mongoose = require('mongoose');
const userEmptyField = require('./data')
const userCreateWrongQ = require('./queries');

let respData = null;
let postData = null;
let hook = 'beforeHook'



describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TESTS', () => {
        before('BEFORE ALL HOOK', ()=> {
            console.log('hook')
        })
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

describe('USER CREATE - negative', () => {
    it('user create empty last name', (done) => {
        postData = {
            query: userCreateQ,
            variables: userEmptyField
        };

        gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                respData = res.body;
                console.log(respData);
                done();
            });
    });
    it('user create -wrong query', (done) => {
        postData = {
            query: userCreateWrongQ,
            variables: user
        }
        gqlRequest(postData)
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                respData = res.body;
                console.log(respData);
                //expect(respData.message).eq("Cannot read properties of undefined (reading \'firstName\')");
                done();
            });




        });
    });



})



