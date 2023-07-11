import express from "express";
import dotenv from "dotenv";
import { mongoose } from "mongoose";
import { schema } from "./schema/schema.js";
import { createYoga } from "graphql-yoga";
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

const db_url = `mongodb+srv://recipes:${process.env.DB_PASSWORD}@recipescluster.dyv0lsq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(db_url);

mongoose.connection.once("open", () => {
  console.log("DB CONNECTED");
});

const yoga = createYoga({ schema });

const server = app.use(yoga);

server.listen(8080, () => {
  console.info("Server is running on PORT: " + PORT);
});
