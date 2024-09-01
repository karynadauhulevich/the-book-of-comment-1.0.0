const userCreateQ4 = `mutation UserCreate($userInput: UserFields) {
    userCreate(userInput: $userInput) {
        _id
        firstName
        lastName
    }
}`
const user4GetByIdQ =
    `query UserGetById($userId: ID!) {
  userGetById(userId: $userId) {
    _id
    firstName
    lastName
  }
}`
const userUpdatedByIdQ = `mutation UserUpdateById {
  userUpdateById {
    _id
    firstName
    lastName
  }
}`
module.exports = {userCreateQ4,user4GetByIdQ,userUpdatedByIdQ}