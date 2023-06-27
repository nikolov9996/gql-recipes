const graphql = require("graphql");
const RecipeModel = require("../models/recipeModel");
const { RecipeType, IngredientsType, CreateRecipeType } = require("./types");

const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString,
} = graphql;


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    recipe: {
      type: RecipeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return RecipeModel.findById(args.id);
      },
    },
    manyRecipes: {
      type: new GraphQLList(RecipeType),
      args: { count: { type: GraphQLInt } },
      resolve(parent, args) {
        return RecipeModel.find({}).limit(args.count);
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addRecipe: {
      type: RecipeType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        cookTime: { type: new GraphQLNonNull(GraphQLInt) },
        prepTime: { type: new GraphQLNonNull(GraphQLInt) },
        ingredients: { type: new GraphQLNonNull(IngredientsType) },
        createdBy: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const { name, cookTime, prepTime, ingredients } = args;
        const recipe = new RecipeModel({
          name,
          cookTime,
          prepTime,
          ingredients,
          createdBy,
        });

        return recipe.save();
      },
    },
    createRecipe: {
      type: CreateRecipeType,
      args: {
        filename: { type: new GraphQLNonNull(GraphQLString) },
        mimetype: { type: new GraphQLNonNull(GraphQLString) },
        encoding: { type: new GraphQLNonNull(GraphQLString) },
        url: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, { file }) {
        console.log(args);
        // return { image: "fj" }
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
