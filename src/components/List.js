import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'

const List = (props) => {
  return (
    <div class="component-container">
      <h1>
        I'm a list
      </h1>
      <div>
        Some lists will go here
      </div>
    </div>
  )
}

export default List