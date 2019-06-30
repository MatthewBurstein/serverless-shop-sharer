import React, { useState } from 'react';

const ListDetails = ({ list }) => {
  const [name, setName] = useState('')

  const hasItems = () => list.items.length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.event.target)
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