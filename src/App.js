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
import addItem from './graphql/mutations/addItem'

Amplify.configure(awsconfig)

const signUpConfig = {
  hiddenDefaults: ['phone_number']
}

function App() {
  const [lists, setLists] = useState([])
  const [currentList, setCurrentList] = useState({})
  useEffect(() => { fetchLists() }, [])

  const fetchLists = async () => {
    const result = await API.graphql(graphqlOperation(listLists))
    setLists(result.data.listLists.items)
  }

  const createList = async listName => {
    const listDetails = { name: listName }
    await API.graphql(graphqlOperation(addList, listDetails))
    return fetchLists()
  }

  const fetchListItems = async listId => {
    const result = await API.graphql(graphqlOperation(getList, { listId }))
    const returnedList = {
      id: result.data.getList.id,
      items: result.data.getList.items.items,
      name: result.data.getList.name
    }
    console.log('returnedList: ', returnedList)
    setCurrentList(returnedList)
  }

  const createItem = async (itemName, listId) => {
    const itemDetails = {
      name: itemName,
      listId
    }
    await API.graphql(graphqlOperation(addItem, itemDetails))
    return fetchListItems(listId)
  }

  const hasCurrentList = () => Object.keys(currentList).length > 0

  const renderCurrentList = () => {
    return <ListDetails list={currentList} createItem={createItem}/>
  }

  return (
    <div className="App">
      <div>
        <NewListForm
          createList={createList}
        />
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
