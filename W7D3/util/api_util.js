// Let's write a function fetchSearchGiphys in api_util.js to make an AJAX call to the Giphy API. It will take a single argument, the searchTerm entered by a user. You can check out the Giphy API docs for more details, but in short, we want to make a GET request to http://api.giphy.com/v1/gifs/search?q=${search+term}&api_key=dc6zaTOxFJmzC&limit=2 where the ${search-term} is replaced with our actual query. We tag limit=2 onto the end of our query params to tell Giphy we only want two GIFs back. The giphy API is relatively slow, so keeping the response size down helps our app be a little faster.
export const fetchSearchGiphys = searchTerm => (
  $.ajax({
    method:'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=2`
    })
);
