import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';
import List from './components/List'
import NewListForm from './components/NewListForm'

Amplify.configure(awsconfig)

const signUpConfig = {
  hiddenDefaults: ['phone_number']
}

function App() {
  return (
    <div className="App">
      <NewListForm />
      <List />
    </div>
  );
}

export default withAuthenticator(App, { signUpConfig });
