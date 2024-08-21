const expect = require('chai')
const UserCreate5 = require('./queries5')
const user5 = require('./data5')
const gqlRequest5 = require('./gqlRequest5')


let respData = null
let postData = null
describe('User Create5', () => {
    describe('user create 5 positive', () =>{
        it ('user create all fields5', (done)=> {
            postData={
               query: UserCreate5,
               variables: user5
            }
         gqlRequest5(postData)
             .end((err, res) => {
                 if(err)return done(err)
                 respData = res.body;
                 console.log(respData)
                 done()







             })





            })











        })











    })













