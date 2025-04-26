import { getAllUsers, getUserById, googleLogin } from "./userResolver.js";
import {
  getPortfolio,
  saveUserPortfolioData
} from "./portfolioResolver.js";

export const resolvers = {
  Query: {
    getAllUsers: () => getAllUsers(),
    getUserById: (_, { id }) => getUserById(id),
    getPortfolio: (_, { email }) => getPortfolio(email),
  },
  Mutation: {
    saveUserPortfolioData: async (_,input) => {
      const { email, data } = input;
      return await saveUserPortfolioData(email, data);
    },
    //createPortfolio: (_, { input }) => createPortfolio(input),
    //updatePortfolio: (_, { input }, { cache }) => updatePortfolio(input, cache),
    createOrUpdatePortfolio: (_, { input }) => createOrUpdatePortfolio(input),
    googleLogin: (_, { code }, { res }) => googleLogin(_, { code }, { res }),
  },
};
