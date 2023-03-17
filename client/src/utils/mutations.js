import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    createLoginUser(email: $email, password: $password) {
      _id
      email
      password
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($_id: ID!, $username: String!,$email:String!,$bookCount:Int!,$savedBooks:[Book]) {
    createAddUser(_id: $_id, username: $username, email:$email!,bookCount:$bookCount,savedBooks:$savedBooks) {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors: String!, $description: String!,$title:String!,$bookId:Int!,$image:Int!,$link:Int!) {
    createAddUser(authors: $authors, description: $description,title:$title,bookId:$bookId,inage:$image,link:$link) {
      authors
      description
      title
      bookId
      imnage
      
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: Int!) {
    createAddUser(bookId: $bookId,) {
     bookId    
    }
  }
`;
