import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider , Query } from 'react-apollo';
import Form from './Form';
import Display from './Display';
import App from './App';
import './index.css';
import SongLink from './SongLink';


const client = new ApolloClient({
  uri:"http://localhost:4000/graphql"
})


ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root'));

