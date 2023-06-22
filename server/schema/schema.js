const graphql = require("graphql");
const RecipeModel = require("../models/recipeModel");

const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString,
} = graphql;

const LikesType = new GraphQLList(GraphQLID);
const IngredientsType = new GraphQLList(GraphQLString);
const CommentsType = new GraphQLList(GraphQLID);
const FavoritesType = new GraphQLList(GraphQLID);
const RatedByType = new GraphQLList(GraphQLID);

const RecipeType = new GraphQLObjectType({
  name: "Recipe",
  fields: () => ({
    name: { type: GraphQLString },
    id: { type: GraphQLID },
    ingredients: { type: IngredientsType },
    prepTime: { type: GraphQLInt },
    cookTime: { type: GraphQLInt },
    likes: { type: LikesType },
    comments: { type: CommentsType },
    favorites: { type: FavoritesType },
    ratedBy: { type: RatedByType },
    createdBy: { type: GraphQLID },
  }),
});

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
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
