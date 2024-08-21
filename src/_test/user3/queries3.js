const userCreateQ3 = `
  mutation Mutation($userInput: UserFields!) {
    userCreate(userInput: $userInput) {
      _id
      firstName
      lastName
    }
  }
`;

module.exports = {userCreateQ3};