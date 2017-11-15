import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';



// Define giphysReducer in giphys_reducer.js to receive the previous state and an action. Recall that a reducer describes how that state should change based on a dispatched action. It should always return the new state without mutating the previous state. If the action dispatched to the reducer should not change the state, the reducer returns state. You will also need to import the RECEIVE_SEARCH_GIPHYS constant from our actions file.
//
// Your reducer should look similar to the this one:



const giphysReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      return action.giphys;
    default:
      return state;
  }
};

export default giphysReducer;
