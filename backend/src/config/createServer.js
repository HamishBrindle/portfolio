const { GraphQLServer } = require('graphql-yoga');

const Mutation = require('../database/resolvers/Mutation');
const Query = require('../database/resolvers/Query');
const database = require('../database');

const createServer = () => {
    return new GraphQLServer({
        typeDefs: 'src/database/graphql/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        context: req => ({ ...req, database })
    })
}

module.exports = createServer;