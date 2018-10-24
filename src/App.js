import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from './apolloClient';
import Home from './Home';
import Detail from './Detail';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
        <Router>
          <React.Fragment>
            <Route exact={true} path={"/"} component = {Home} />
            <Route path={"/details/:id"} component = {Detail} />
          </React.Fragment>
        </Router>
      </ApolloProvider>

    );
  }
}

export default App;