import { gql } from '@apollo/client';

export const QUERY_GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;
