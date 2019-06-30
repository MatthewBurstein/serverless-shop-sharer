import React, { useState } from 'react'

const NewListForm = ({ createList }) => {
  const [name, setName] = useState("")
  const [isLoadingLists, setIsLoadingLists] = useState(false)

  const handleSubmit = event => {
    setIsLoadingLists(true)
    event.preventDefault()
    createList(name).then(() => {
      setIsLoadingLists(false)
    })
  }

  return (
    <div className="component-container">
      <h1>
        Add a new list
      </h1>
      <form>
        <label htmlFor="name">
          List name
        </label>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}></input>
        <button
          onClick={e => handleSubmit(e)}
          disabled={isLoadingLists}
        >
          {isLoadingLists ? "Loading" : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default NewListForm