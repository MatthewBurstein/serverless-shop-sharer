import React from 'react';
import ItemCard from './ItemCard';
import NewItemForm from './NewItemForm';

const ListDetails = ({ list, createItem }) => {
  const hasItems = () => list.items.length > 0

  return(
    <div className="component-container">
      <h1>{list.name}</h1>
      <NewItemForm createItem={createItem} listId={list.id} />
      <ul>
        { hasItems() && list.items.map((item, idx) => {
          return(<ItemCard key={idx} item={item}/>)
        })}
      </ul>
    </div>
  )
}

export default ListDetails