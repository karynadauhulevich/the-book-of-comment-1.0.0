const userCreateQ= `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`
module.exports = { userCreateQ }

const userGetByIdQ =
 `query UserGetById($userId: ID!) {
  userGetById(userId: $userId) {
    _id
    firstName
    lastName
  }
}`
const userCreateWrongQ= `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`
module.exports = {userCreateQ, userGetByIdQ, userCreateWrongQ}