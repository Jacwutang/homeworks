
// Let's start by defining our app's Redux store.
//
// Open frontend/store.js.
// We will need to import createStore from redux.
// Also import our reducer function from frontend/reducer.js. This is a dummy function which returns the default state, we'll replace it soon.
// Then, all we have to do is call createStore, passing in the reducer function.
// Don't forget to export it!
// The entry file requires our store and passes it as a prop to the Widget component. If you refresh the index.html page, you'll see a new webpack error: selectCurrency is undefined in Widgets. Let's fix this by creating an action creator.
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer);
export default store;
