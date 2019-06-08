import React, {useState} from 'react'

const NewListForm = (props) => {
  const [name, setName] = useState("")

  return (
    <div class="component-container">
      <h1>
        Add a new list
      </h1>
      <form>
        <label htmlFor="name">
          List name
        </label>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}></input>
      </form>
    </div>
  )
}

export default NewListForm