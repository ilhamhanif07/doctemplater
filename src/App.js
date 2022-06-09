import Router from './router/Router';
import { RecoilRoot, ThemeProvider, GlobalCss } from '@mostrans/web-components/providers';
import { DATE_FORMAT } from '@mostrans/web-components/constants'
import { ApolloClient, ApolloProvider, from, HttpLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { useEffect } from 'react';
import moment from 'moment';

function App() {
	const timestamp = moment().format(DATE_FORMAT.timestamp);
	const paramHeader = `{"timestamp": "${timestamp}"}`
	const url = 'http://localhost:5013/graphql';

	let link = createHttpLink({
		uri: url,
		headers: {
			authorization: `Bearer ` + window.btoa(paramHeader)
		}
	});

	let cache = new InMemoryCache();

	let client = new ApolloClient({
		cache: cache,
		defaultOptions: {
			watchQuery: {
				fetchPolicy: 'no-cache',
			},
			query: {
				fetchPolicy: 'no-cache'
			}
		},
		link: from([link])
	})

	return (
		<RecoilRoot>
			<ApolloProvider client={client}>
				<ThemeProvider>
					<GlobalCss />
					<Router />
				</ThemeProvider>
			</ApolloProvider>
		</RecoilRoot>
	);
}

export default App;
