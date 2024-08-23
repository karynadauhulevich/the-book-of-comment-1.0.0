const userCreateQ4 = `mutation UserCreate($userInput: UserFields) {
    userCreate(userInput: $userInput) {
        _id
        firstName
        lastName
    }
}`
module.exports = {userCreateQ4}