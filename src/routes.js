import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Default from './components/Default';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Default}/>
		<Route path="default" component={Default}/>

    </Route>
);

export default routes;
