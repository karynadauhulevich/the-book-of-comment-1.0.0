const userCreateQ1 = `mutation UserCreate($userInput: UserFields) {
    userCreate(userInput: $userInput) {
        _id
        firstName
        lastName
    }
}`
module.exports = {userCreateQ1}