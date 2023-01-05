// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Mutation {
    login: [Auth]
    addUser:
    saveBook:
}

type removeBook:{

}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book: {
    bookID: 
    authors:
    description: 
    title:
    image:
    link:
}

type Auth {
    token:
    user: [User]
}
  type Query {
me(username: String):[User]
  }
`;
// export the typeDefs
module.exports = typeDefs;