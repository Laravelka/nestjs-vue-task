import { createApp } from 'vue';
import App from './App.vue';

import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createApolloProvider } from '@vue/apollo-option';

// HTTP connection to the API
const httpLink = createHttpLink({
	// You should use an absolute URL here
	uri: 'http://localhost:3000/graphql',
});
// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
	link: httpLink,
	cache,
});
const apolloProvider = createApolloProvider({
	defaultClient: apolloClient,
});
const app = createApp(App);

app.use(apolloProvider);
app.use(Quasar, quasarUserOptions);

app.mount('#app');