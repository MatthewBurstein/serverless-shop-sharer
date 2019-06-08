import React, {useState} from 'react'

const NewListForm = ({ sendData }) => {
  const [name, setName] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    sendData(name)
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
        <button onClick={e => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default NewListForm