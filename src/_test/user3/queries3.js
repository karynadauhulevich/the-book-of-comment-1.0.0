const userCreateQ3 =  `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`

module.exports = {userCreateQ3};