const { GraphQLServer } = require('graphql-yoga');

const Mutation = require('../resolvers/Mutations');
const Query = require('../resolvers/Queries');
const database = require('./database');

const createServer = () => {
    return new GraphQLServer({
        typeDefs: 'database/graphql/schema.graphql',
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