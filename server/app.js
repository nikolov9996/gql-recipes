require("dotenv").config();
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { typeDefs } = require("./schema/types");
const { findRecipeById, getManyRecipes } = require("./schema/resolvers");

const PORT = process.env.PORT || 8080;

const db_url = `mongodb+srv://recipes:${process.env.DB_PASSWORD}@recipescluster.dyv0lsq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(db_url);

mongoose.connection.once("open", () => {
  console.log("DB CONNECTED");
});

// Provide resolver functions for schema fields
const resolvers = {
  Query: {
    findRecipeById: findRecipeById,
    getManyRecipes: getManyRecipes,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());

server.start().then(() => {
  server.applyMiddleware({ app });
});

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
