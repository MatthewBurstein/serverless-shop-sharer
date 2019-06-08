import React from 'react'

const List = ({ lists }) => {
  return (
    <div className="component-container">
      <h1>
        Lists
      </h1>
      <div>
        <ul>
          {lists.map(list => <li>{list.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default List