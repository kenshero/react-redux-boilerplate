export default function poster(currentState, action) {
    var DEFAULT_STATE = {
      posts: []
    };

    var nextState = {...currentState};

    if (typeof currentState === 'undefined' ) {
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch(action.type) {
      case "GET_POSTS":
        nextState.posts = action.payload.posts
        return nextState;
      default:
          return nextState;
    }
}


