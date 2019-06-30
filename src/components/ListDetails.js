import React, { useState } from 'react';

const ListDetails = ({ list, createItem }) => {
  const [name, setName] = useState('')
  const [isLoadingItems, setIsLoadingItems]= useState(false)
  console.log(list)

  const hasItems = () => list.items.length > 0

  const handleSubmit = (e) => {
    setIsLoadingItems(true)
    e.preventDefault()
    createItem(name, list.id).then(() => {
      setIsLoadingItems(false)
    })
  }

  return(
    <>
      <h1>{list.name}</h1>
      <form>
        <label htmlFor="name">
          Name
        </label>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={e => handleSubmit(e)}>Submit</button>
      </form>
      <ul>
      { hasItems() && list.items.map((item, id) => {
        return(<li>{item.name}</li>)
      })}
      </ul>
    </>
  )
}

export default ListDetails