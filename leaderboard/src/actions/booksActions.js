import axios from 'axios';


export function booksHasErrored(bool) {
  return {
      type: 'BOOKS_HAS_ERRORED',
      hasErrored: bool
  };
}
export function booksIsLoading(bool) {
  return {
      type: 'BOOKS_IS_LOADING',
      isLoading: bool
  };
}
export function booksFetchData() {
  return function(dispatch) {
    dispatch({type: "FETCH_TWEETS"});

    axios.get(url)
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}
