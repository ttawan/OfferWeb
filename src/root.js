import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from 'containers/Home';
import DetailPage from 'containers/Detail';
import NotFoundPage from 'views/NotFoundPage';

// Components
import Navigation from 'components/Navigation';

function Root({ history }) {
  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/offer/id/:id" component={DetailPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Navigation />
    </React.Fragment>
  );
}

export default Root;
