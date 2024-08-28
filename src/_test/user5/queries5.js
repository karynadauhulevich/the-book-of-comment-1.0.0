const userCreateQ5 = `mutation UserCreate($userInput: UserFields) {
    userCreate(userInput: $userInput) {
        _id
        firstName
        lastName
    }
}`
const user5GetByIdQ = `query UserGetById($userId: ID!) {
    userGetById(userId: $userId) {
        firstName
        lastName
        _id
    }
}`
module.exports = {userCreateQ5, user5GetByIdQ}