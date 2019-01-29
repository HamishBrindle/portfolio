const { GraphQLServer } = require('graphql-yoga');

const createServer = (database, resolvers) => {
    return new GraphQLServer({
        typeDefs: 'graphql/schema.graphql',
        resolvers,
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        context: req => ({ ...req, database })
    });
}

module.exports = createServer;