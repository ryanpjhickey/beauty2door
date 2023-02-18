// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Item {
    _id: ID
    itemName: String
    itemStock: Int
    itemPrice: Int
    itemDesc: String
  }

  type Query {
    item(_id: ID!): Item
    items:[Item]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(itemName: String! itemPrice: Int! itemStock: Int!): Item
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;