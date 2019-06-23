import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';
import Lists from './components/Lists'
import ListDetails from './components/ListDetails'
import NewListForm from './components/NewListForm'
import listLists from './graphql/queries/listLists'
import getList from './graphql/queries/getList'
import addList from './graphql/mutations/addList'

Amplify.configure(awsconfig)

const signUpConfig = {
  hiddenDefaults: ['phone_number']
}

function App() {
  const [lists, setLists] = useState([])
  const [currentList, setCurrentList] = useState({})
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

  const fetchListItems = async listId => {
    const result = await API.graphql(graphqlOperation(getList, { listId }))
    const returnedList = {
      id: result.data.getList.id,
      items: result.data.getList.items.items,
      name: result.data.getList.name
    }
    console.log('returnedList', returnedList)
    setCurrentList(returnedList)
  }

  const hasCurrentList = () => Object.keys(currentList).length > 0

  const renderCurrentList = () => {
    return <ListDetails list={currentList}/>
  }

  return (
    <div className="App">
      <div>
        <NewListForm sendData={handleNewListSubmit}/>
        <Lists
          fetchListItems={fetchListItems}
          lists={lists}
        />
      </div>
      {hasCurrentList() && renderCurrentList()}
    </div>
  );
}

export default withAuthenticator(App, { signUpConfig });
