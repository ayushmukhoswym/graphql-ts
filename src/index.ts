import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// @ts-ignore
import { products, categories } from "../database/db.js";

// @ts-ignore
import { typeDefs } from "./graphql/schema.ts";

// @ts-ignore
import { Query } from "./graphql/resolvers/queryResolvers.ts";
// @ts-ignore
import { Category } from "./graphql/resolvers/categoryResolvers.ts";
// @ts-ignore
import { Product } from "./graphql/resolvers/productResolvers.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    return {
      products,
      categories,
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
