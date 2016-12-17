export function add(){
  return (dispatch, getState) => {
    // dispatch "in progress" event - ignored for now
    dispatch({
      type: 'INIT_ADD'
    })

    setTimeout(() => {
      dispatch({
        type: 'ADD'
      })
    }, getState().length * 1000)
  }
}

export function increment(index){
  return {
    type: 'INCREMENT',
    index,
  }
}
