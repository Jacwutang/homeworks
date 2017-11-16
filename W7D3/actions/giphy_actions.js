import * as APIUtil from '../util/api_util';
export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
// Write and export receiveSearchGiphys, a function that receives giphys and returns an action object. The object should have two keys: one for the type and another for the giphys data. Your function should look like the following:

export const receiveSearchGiphys = giphys => {

  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  }
};


export const fetchSearchGiphys = searchTerm => dispatch => {
	return APIUtil.fetchSearchGiphys(searchTerm)
		.then(giphys => dispatch(receiveSearchGiphys(giphys.data)))
};
