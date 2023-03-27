const { gql } = require('apollo-server-express');
//add your models as const model name = require('/."");

const typeDefs = gql `
    type User{  
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book] 
  }

  type Book {
  bookId: ID! 
  authors: [String] 
  description: String
  title: String
  image: String
  link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

   input BookType{
    authors: String!
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
   }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password:String!): Auth
    saveBook(bookData: BookType!): User
    removeBook(bookId: ): User
  }
`;

module.exports = typeDefs;
//look into inpu type to handle all the savBook Mutation parameters