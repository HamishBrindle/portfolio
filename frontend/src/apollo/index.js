import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloBoostClient from 'apollo-boost';

const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:4444/graphql';

// Create the apollo client
export const apolloClient = new ApolloBoostClient({
  uri: httpEndpoint,
  credentials: 'include',
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// Install the vue plugin
Vue.use(VueApollo);

export default apolloProvider;
