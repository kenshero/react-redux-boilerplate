export default function counter(currentState, action) {
    var DEFAULT_STATE = {
      count: 0
    };

    var nextState = {...currentState};

    if (typeof currentState === 'undefined' ) {
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch(action.type) {
      case "INCREMENT":
        nextState.count = currentState.count + 1
        return nextState;
      case "DECREMENT":
        nextState.count = currentState.count - 1
        return nextState;
      default:
          return nextState;
    }
}


