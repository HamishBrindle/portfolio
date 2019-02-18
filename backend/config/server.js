const path = require('path');
const { importSchema } = require('graphql-import');
const { ApolloServer, gql } = require('apollo-server-express');

const createServer = (database, resolvers) => {
    return new ApolloServer({
        typeDefs: importSchema(path.resolve('graphql/schema.graphql')),
        resolvers,
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        uploads: false,
        context: req => ({ ...req, database })
    });
}

module.exports = { createServer };