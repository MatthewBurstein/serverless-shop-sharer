import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';
import List from './components/List'
import NewListForm from './components/NewListForm'
import listLists from './graphql/queries/listLists'

Amplify.configure(awsconfig)

const signUpConfig = {
  hiddenDefaults: ['phone_number']
}

function App() {
  const [lists, setLists] = useState([])

  useEffect(() => {
    const fetchLists = async () => {
      const result = await API.graphql(graphqlOperation(listLists))
      const listsFromAPI = (result.data.listLists.items)
      setLists(listsFromAPI)
    }

    fetchLists()
  }, [])

  return (
    <div className="App">
      <NewListForm />
      <List lists={lists}/>
    </div>
  );
}

export default withAuthenticator(App, { signUpConfig });
