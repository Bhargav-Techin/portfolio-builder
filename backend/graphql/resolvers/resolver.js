import { getAllUsers, getUserById } from "./userResolver.js";
import {
  getPortfolio,
  createPortfolio,
  updatePortfolio,
} from "./portfolioResolver.js";

export const resolvers = {
  Query: {
    getAllUsers: () => getAllUsers(),
    getUserById: (_, { id }) => getUserById(id),
    getPortfolio: (_, { email }) => getPortfolio(email),
  },
  Mutation: {
    createPortfolio: (_, { input }) => createPortfolio(input),
    updatePortfolio: (_, { input }, { cache }) => updatePortfolio(input, cache),
  },
    createOrUpdatePortfolio: (_, { input }) => createOrUpdatePortfolio(input),
    googleLogin: (_, { code }, { res }) => googleLogin(_, { code }, { res }),
  }
};
