const { GraphQLUpload } = require('graphql-upload');
const Mutation = require('./Mutations');
const Query = require('./Queries');

module.exports = {
  Mutation,
  Query,
  Upload: GraphQLUpload
};