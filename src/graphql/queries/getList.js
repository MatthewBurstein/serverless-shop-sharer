const getList = `query getList($listId:ID!) {
  getList(id:$listId) {
    id
    name
    items {
      items {
        id
        name
      }
    }
  }
}`

export default getList