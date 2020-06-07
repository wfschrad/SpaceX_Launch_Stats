import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import Launches from './components/Launches';
import Launch from './components/Launch';
import LaunchItem from './components/LaunchItem';
import logo from './SpaceX_logo.jpeg';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className='container'>
          <img
            src={logo}
            alt='SpaceX'
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <Route exact path='/' component={Launches} />
          <Route path='/launch/:flight_number' component={Launch} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
