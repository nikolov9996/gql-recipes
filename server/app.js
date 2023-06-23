const express = require("express");
const cors = require("cors");
require("dotenv").config();
const schema = require("./schema/schema.js");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

const db_url = `mongodb+srv://recipes:${process.env.DB_PASSWORD}@recipescluster.dyv0lsq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(db_url);

mongoose.connection.once("open", () => {
    console.log("DB CONNECTED")
})


app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log("Server running on PORT: " + PORT);
})