import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./types/typeDef.js";
import { resolvers } from "./resolvers/resolver.js";

const graphqlserver = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

export default graphqlserver;
