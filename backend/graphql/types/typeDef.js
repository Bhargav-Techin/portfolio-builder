export const typeDefs = `#graphql
    
    type User {
      id: ID!
      email: String!
      password: String!
      role: String!
    }
    type Query {
      getAllUsers: [User]
      getUserById(id: ID!): User
    }
  `