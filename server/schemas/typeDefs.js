const { gql } = require('apollo-server-express');
//add your models as const model name = require('/."");

const typeDefs = gql`
    type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book] //array of book type
  }

  type Book {
  bookId: //value returned from Google's Book API
  authors: [] array of strings as there will be more than one authors
  description: String
  title: String
  image: 
  link:
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: [User]
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    adduser(username: String!, email: String!, password:String!): Auth
    saveBook(authors: String!, description: String!, title: String!, bookId: ,image: ,link: ): User
    removeBook(bookId: ): User
  }
`;

module.exports = typeDefs;
//look into inpu type to handle all the savBook Mutation parameters