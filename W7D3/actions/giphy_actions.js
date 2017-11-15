import * as APIUtil from '../util/api_util';
export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
// Write and export receiveSearchGiphys, a function that receives giphys and returns an action object. The object should have two keys: one for the type and another for the giphys data. Your function should look like the following:

export const receiveSearchGiphys = giphys => {

  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  }
};




// Export a function fetchSearchGiphysthat
// Receives a search term
// Returns a function that can be called with dispatch and uses a promise to dispatch receiveSearchGiphys with the received data after APIUtil.fetchSearchGiphys is successful.
// Your thunk action creator should look like the following:

export const fetchSearchGiphys = (searchTerm) => {
	return (dispatch) => {
		APIUtil.fetchSearchGiphys(searchTerm)
			.then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
	}
};
