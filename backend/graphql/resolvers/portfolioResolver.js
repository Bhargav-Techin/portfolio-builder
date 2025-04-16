import Portfolio from "../../models/PortfolioSchema.js";


export const getPortfolio = async (email) => {
  return await Portfolio.findOne({ email });
};

export const createOrUpdatePortfolio = async (input) => {
  return await Portfolio.findOneAndUpdate(
    { email: input.email },
    { ...input },
    { new: true, upsert: true }
  );
};
