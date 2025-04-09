import { getAllUsers, getUserById } from "./userResolver.js";

export const resolvers = {
    Query: {
        getAllUsers: () => getAllUsers(),
        getUserById: (_, { id }) => getUserById(id),
    },
}