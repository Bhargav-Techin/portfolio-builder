import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import helmet from 'helmet';
import xss from 'xss-clean';
import cors from 'cors';

import  connectToMongoDB  from "./databases/MongoDBConnection.js";    
import  graphqlserver  from "./graphql/graphql.js";
import { expressMiddleware } from '@apollo/server/express4';
connectToMongoDB();
await graphqlserver.start().then(() => console.log("GraphQL server started"));

const app = express();


// Security middlewares
app.use(helmet());
app.use(xss());
app.use(cors());
app.use(express.json());

// GraphQL
app.use("/graphql", expressMiddleware(graphqlserver));

// Application routes
import userRoutes from './routes/userRoutes.js';    
app.use("/user", userRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
