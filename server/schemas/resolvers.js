const {AuthenticationError} = require ('apollo-server-express');
const {User} = require("../model")
const {signToken} = require("../")


const resolvers = {
  Query: {
   
    me: async (parent, { _id },context) => {
     if(context.user){
      const userRecord = await User.findOne({_id:context.user._id}).select('-__v -password')
      return userRecord
     }
     throw new AuthenticationError('Please login ')
    },
  },
  Mutation: {
    login: async (parent, args) => {
      const userData = await User.findOne({email:args.email})    
      if(!userData){
        throw new AuthenticationError("User doesn't exist")
      }
      const checkPassword = await user.isCorrectPassword(args.password)
      if(!checkPassword){
        throw new AuthenticationError("Password doesn't match")

      }
      const token = signToken(userData);
      return {token, userData}
    },
    addUser: async (parent,args) => {
      const username = await User.create(args)
      const token = signToken(userData);
      return {token, userData}
    },
    saveBook: async (parent, args) => {
      const bookRecord = args.bookData
      const updateUserRecord = User.findOneAndUpdate(
        { _id : context.user._id },
        { $addToSet: {savedBooks: bookRecord} },
        { new: true }
      ); 
      return updateUserRecord;
    },

    removeBook: async (parent, {bookId}) => {
      const updateUserRecord = User.findOneAndUpdate(
        { _id : context.user._id },
        { $Pull: {savedBooks: {bookId}} },
        { new: true }
      ); 
      return updateUserRecord;
    },

  },
};

module.exports = resolvers;