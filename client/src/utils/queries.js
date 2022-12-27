import { gql } from '@apollo/client';
// This file currently has all the content of both the book app and deep thoughts app.  They are labelled and slightly seperated

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;


// Deep Thoughts
// export const QUERY_THOUGHTS = gql`
//   query thoughts($username: String) {
//     thoughts(username: $username) {
//       _id
//       thoughtText
//       createdAt
//       username
//       reactionCount
//       reactions {
//         _id
//         createdAt
//         username
//         reactionBody
//       }
//     }
//   }
// `;

// export const QUERY_THOUGHT = gql`
//   query thought($id: ID!) {
//     thought(_id: $id) {
//       _id
//       thoughtText
//       createdAt
//       username
//       reactionCount
//       reactions {
//         _id
//         createdAt
//         username
//         reactionBody
//       }
//     }
//   }
// `;

// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       friendCount
//       friends {
//         _id
//         username
//       }
//       thoughts {
//         _id
//         thoughtText
//         createdAt
//         reactionCount
//       }
//     }
//   }
// `;

// export const QUERY_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//       friendCount
//       thoughts {
//         _id
//         thoughtText
//         createdAt
//         reactionCount
//         reactions {
//           _id
//           createdAt
//           reactionBody
//           username
//         }
//       }
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const QUERY_ME_BASIC = gql`
//   {
//     me {
//       _id
//       username
//       email
//       friendCount
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;



// Book app
// export const GET_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//       bookCount
//       savedBooks {
//         bookId
//         authors
//         image
//         link
//         title
//         description
//       }
//     }
//   }
// `;