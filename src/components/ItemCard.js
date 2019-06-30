import React from 'react';

const ItemCard = item => {
  return(
    <div className="component-container">
      <li>{item.item.name}</li>
    </div>
  )
}

export default ItemCard