import React, { useState } from 'react'

const NewItemForm = ({ createItem, listId }) => {
  const [name, setName] = useState("")
  const [isLoadingItems, setIsLoadingItems]= useState(false)

  const handleSubmit = (e) => {
    setIsLoadingItems(true)
    e.preventDefault()
    createItem(name, listId).then(() => {
      setIsLoadingItems(false)
    })
  }

  return (
    <div className="component-container">
      <form>
        <label htmlFor="name">
          Name
        </label>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}></input>
        <button
          onClick={e => handleSubmit(e)}
          disabled={isLoadingItems}
        >
          { isLoadingItems ? "Loading" : "Submit" }</button>
      </form>
    </div>
  )
}

export default NewItemForm