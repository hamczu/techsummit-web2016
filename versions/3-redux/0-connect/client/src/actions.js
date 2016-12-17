export function add(){
  return {
    type: 'ADD'
  }
}

export function increment(index){
  return {
    type: 'INCREMENT',
    index,
  }
}
