const { User, Book } = require("../models");

const resolvers = {
  Query: {
    books: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Book.find(params).sort({ createdAt: -1 });
    },

    // place this inside of the `Query` nested object right after `books`
    book: async (parent, { _id }) => {
      return Book.findOne({ _id });
    },

    // get all users
users: async () => {
    return User.find()
      .select('-__v -password')
      .populate('friends')
      .populate('books');
  },
  // get a user by username
  user: async (parent, { username }) => {
    return User.findOne({ username })
      .select('-__v -password')
      .populate('friends')
      .populate('books');
  },
  },
};

module.exports = resolvers;
