
const graphql = require("graphql");

const {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
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
        rating: { type: GraphQLInt }
    }),
});

const CreateRecipeType = new GraphQLObjectType({
    name: "CreateRecipe",
    fields: () => ({
        filename: { type: GraphQLString },
        mimetype: { type: GraphQLString },
        encoding: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

module.exports = {
    RecipeType,
    IngredientsType,
    CreateRecipeType
}