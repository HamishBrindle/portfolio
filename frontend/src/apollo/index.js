import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';

/**
 * Configure Apollo client and install VueApollo
 */
const apolloClient = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
  credentials: 'include',
});
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export default apolloProvider;
export {
  apolloClient,
};
