const { User, Recipe } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
          items: async ()=>{
            const res = await Item.find({})
            return res
          },

          item: async (parent, { _id }) => {
            return Item.findOne({ _id });
          }
        
        },
        
  Mutation: {
    createUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
      
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const token = signToken(user);
        return { token, user };
      },
      addItem: async (parent, args) => {
          
          const item = await Item.create({ ...args }); 
          
          return item;
        }
      
      }
};
  
  module.exports = resolvers;