import Portfolio from "../../models/PortfolioSchema.js";
import { generatePromptWithGemini } from "../../utils/gemini.service.js";


export const getPortfolio = async (email) => {
  try {
    const portfolio = await Portfolio.findOne({ email }).populate("email");
    return portfolio;
  } catch (err) {
    console.error("Error fetching portfolio:", err);
    throw new Error("Failed to fetch portfolio.");
  }
};


export const createPortfolio = async (input) => {
  try {
    const existing = await Portfolio.findOne({ email: input.email });
    if (existing) throw new Error("Portfolio already exists for this user.");

    const prompt = await generatePromptWithGemini(input);

    const newPortfolio = new Portfolio({ ...input, prompt });
    await newPortfolio.save();

    return newPortfolio;
  } catch (err) {
    console.error("Error creating portfolio:", err);
    throw new Error("Failed to create portfolio.");
  }
};


export const updatePortfolio = async (input, cache) => {
  try {
    const { email } = input;
    const portfolio = await Portfolio.findOne({ email });
    if (!portfolio) throw new Error("Portfolio not found.");

    const combined = { ...portfolio.toObject(), ...input };
    const prompt = await generatePromptWithGemini(combined);

    const updatedFields = { ...input, prompt };

    await Portfolio.updateOne({ email }, { $set: updatedFields });

    if (cache && typeof cache.del === "function") {
      cache.del(`chatKey_${email}`);
    }

    return await Portfolio.findOne({ email });
  } catch (err) {
    console.error("Error updating portfolio:", err);
    throw new Error("Failed to update portfolio.");
  }
};


