const userCreateQ2 = `mutation UserCreate($userInput: UserFields) {
    userCreate(userInput: $userInput) {
        _id
        firstName
        lastName
    }
}`
const user2GetByIdQ = `query UserGetById($userId: ID!) {
  userGetById(userId: $userId) {
    firstName
    lastName
    _id
  }
}`
module.exports = {userCreateQ2, user2GetByIdQ}