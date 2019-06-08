const addList = `mutation createList($name:String!) {
  createList(input:{
    name:$name
  }){
    id
    name
  }
}
`
export default addList