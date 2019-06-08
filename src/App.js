import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';
import Lists from './components/Lists'
import NewListForm from './components/NewListForm'
import listLists from './graphql/queries/listLists'
import addList from './graphql/mutations/addList'

Amplify.configure(awsconfig)

const signUpConfig = {
  hiddenDefaults: ['phone_number']
}

function App() {
  const [lists, setLists] = useState([])

  useEffect(() => {
    const fetchLists = async () => {
      const result = await API.graphql(graphqlOperation(listLists))
      console.log(result)
      setLists(result.data.listLists.items)
    }

    fetchLists()
  }, [])

  const handleNewListSubmit = async listName => {
    const listDetails = { name: listName }

    const newList = await API.graphql(graphqlOperation(addList, listDetails))
    console.log(newList)
  }

  return (
    <div className="App">
      <NewListForm sendData={handleNewListSubmit}/>
      <Lists lists={lists}/>
    </div>
  );
}

export default withAuthenticator(App, { signUpConfig });
