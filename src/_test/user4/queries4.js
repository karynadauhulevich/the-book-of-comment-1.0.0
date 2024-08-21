
const UserCreateQ4 = `
mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}
`
module.exports = {UserCreateQ4}