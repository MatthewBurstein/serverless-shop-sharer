import React from 'react'

const Lists = ({ lists, fetchListItems }) => {
  return (
    <div className="component-container">
      <h1>
        Lists
      </h1>
      <div>
        <ul>
          {lists.map(list => {
            return(
              <li key={list.id}>
                <button onClick={() => fetchListItems(list.id)}>
                  {list.name}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Lists