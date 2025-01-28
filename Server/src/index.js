import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema/typedefs.js";
import resolvers from "./resolvers/resolvers.js";
import { connectDB } from "./config/db.js";
import { contextMiddleware } from "./config/auth.js";

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
  context: contextMiddleware,
});

console.log(`Server Ready at: ${url}`);
