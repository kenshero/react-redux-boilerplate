import axios from 'axios';

let actions = {}

actions.fetchPosts = () => {
  return (dispatch) => {  
    dispatch(actions.getPosts())
  }
}

actions.getPosts = () => {
  return (dispatch) => {
    var url = 'https://jsonplaceholder.typicode.com/posts';
    return axios.get(url)
    .then(function (response) {
      dispatch({
        type: "GET_POSTS",
        payload: {
          posts: response.data
        }
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export default actions
