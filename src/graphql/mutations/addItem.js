const addItem = `mutation createItem($name:String!, $listId:ID!) {
  createItem(input:{
    name:$name
    itemListId:$listId
  }){
    id
    name
    list {
      id
      name
    }
  }
}
`
export default addItem