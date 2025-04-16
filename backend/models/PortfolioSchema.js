import mongoose from "mongoose";

const TechSchema = new mongoose.Schema({
  name: { type: String, required: true },
  iconUrl: String
});

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: String,
  techStack: [TechSchema]
});

const EducationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  startYear: Number,
  endYear: Number,
  grade: String
});

const ExperienceSchema = new mongoose.Schema({
  position: { type: String, required: true },
  company: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: String,
  description: String
});

const SocialSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true },
  iconUrl: String
});

const CertificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  issuer: { type: String, required: true },
  date: String,
  link: String,
  logoUrl: String
});

const PortfolioSchema = new mongoose.Schema({
  email: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  name: { type: String, required: true },
  bio: { type: String, required: true },
  prompt: { type: String, required: true },
  profileImage: String,
  resumeUrl: String,
  skills: [{ type: String, required: true }],
  projects: [ProjectSchema],
  education: [EducationSchema],
  experience: [ExperienceSchema],
  socials: [SocialSchema],
  certifications: [CertificationSchema],
  theme: { type: String, required: true }
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

export default Portfolio;
