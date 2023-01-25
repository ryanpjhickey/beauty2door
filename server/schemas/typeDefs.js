// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  

  type Recipe {
    _id: ID
    recipeText: String
    recipeName: String
    ingredients: String
    createdAt: String
    username: String
    favoriteCount: Int
    favorites: [Recipe]
  }


  type Query {
    item(_id: ID!): Item
    items:[Item]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(itemName: String! itemPrice: String! itemStock: String!): Item
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;