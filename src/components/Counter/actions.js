let actions = {}

actions.increment = () => {
  return (dispatch) => {
    dispatch({type: 'INCREMENT'})
  }
}

actions.decrement = () => {
  return (dispatch) => {
    dispatch({type: 'DECREMENT'})
  }
}

export default actions
