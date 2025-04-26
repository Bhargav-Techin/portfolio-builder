export const typeDefs = `#graphql

  type User {
    id: ID!
    email: String!
    password: String!
    role: String!
    name: String
    profilePic: String
  }

  type Tech {
    name: String!
    iconUrl: String
  }

  type Project {
    title: String!
    description: String!
    link: String
    techStack: [Tech!]
  }

  type Education {
    degree: String!
    institution: String!
    startYear: Int
    endYear: Int
    grade: String
  }

  type Experience {
    position: String!
    company: String!
    startDate: String!
    endDate: String
    description: String
  }

  type Social {
    platform: String!
    url: String!
    iconUrl: String
  }

  type Certification {
    name: String!
    issuer: String!
    date: String
    link: String
    logoUrl: String
  }

  type Portfolio {
    email: String!
    name: String!
    bio: String!
    prompt: String!
    profileImage: String
    resumeUrl: String
    skills: [String!]!
    projects: [Project!]!
    education: [Education]
    experience: [Experience]
    socials: [Social]
    certifications: [Certification]
    theme: String!
  }

  type AuthResponse {
    success: Boolean!
    message: String!
    user: User
    accessToken: String
    refreshToken: String
  }

  input TechInput {
    name: String!
    iconUrl: String
  }

  input ProjectInput {
    title: String!
    description: String!
    link: String
    techStack: [TechInput!]
  }

  input EducationInput {
    degree: String!
    institution: String!
    startYear: Int
    endYear: Int
    grade: String
  }

  input ExperienceInput {
    position: String!
    company: String!
    startDate: String!
    endDate: String
    description: String
  }

  input SocialInput {
    platform: String!
    url: String!
    iconUrl: String
  }

  input CertificationInput {
    name: String!
    issuer: String!
    date: String
    link: String
    logoUrl: String
  }

  input UserInput {
    email: String!
    name: String!
    bio: String!
    prompt: String!
    profileImage: String
    resumeUrl: String
    skills: [String!]!
    projects: [ProjectInput!]!
    education: [EducationInput]
    experience: [ExperienceInput]
    socials: [SocialInput]
    certifications: [CertificationInput]
    theme: String!
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID!): User

    getPortfolio(email: String!): Portfolio
  }

  type Mutation {
    saveUserPortfolioData(input: UserInput!): Portfolio
    createOrUpdatePortfolio(input: UserInput!): Portfolio
    googleLogin(code: String!): AuthResponse!
  }
`;
