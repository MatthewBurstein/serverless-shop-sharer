const listLists = `query listLists {
  listLists(limit: 1000) {
    items{
      id
      name
    }
  }
}`

export default listLists