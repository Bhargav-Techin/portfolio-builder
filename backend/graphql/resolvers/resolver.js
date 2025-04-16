import { getAllUsers, getUserById } from './userResolver.js';
import { getPortfolio, createOrUpdatePortfolio } from './portfolioResolver.js';

export const resolvers = {
  Query: {
    getAllUsers: () => getAllUsers(),
    getUserById: (_, { id }) => getUserById(id),

    getPortfolio: (_, { email }) => getPortfolio(email),
  },
  Mutation: {
    createOrUpdatePortfolio: (_, { input }) => createOrUpdatePortfolio(input)
  }
};
