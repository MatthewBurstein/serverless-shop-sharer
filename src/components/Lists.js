import React from 'react'

const Lists = ({ lists }) => {
  return (
    <div className="component-container">
      <h1>
        Lists
      </h1>
      <div>
        <ul>
          {lists.map(list => <li key={list.id}>{list.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Lists