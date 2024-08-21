const UserCreateQ5 =  `
  mutation Mutation($userInput: UserFields!) {
    userCreate(userInput: $userInput) {
      _id
      firstName
      lastName
    }
  }
`
module.exports = {UserCreateQ5}