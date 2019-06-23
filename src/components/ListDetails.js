import React from 'react';

const ListDetails = ({ list }) => {
  console.log(list)

  const hasItems = () => list.items.length > 0

  return(
    <>
      <h1>{list.name}</h1>
      <ul>
      {hasItems() && list.items.map((item, id) => {
        return(<li>{item.title}</li>)
      })}
      </ul>
    </>
  )
}

export default ListDetails