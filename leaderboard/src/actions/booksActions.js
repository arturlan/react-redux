// import axios from 'axios';
//
//
// export function booksHasErrored(bool) {
//   return {
//       type: 'BOOKS_HAS_ERRORED',
//       hasErrored: bool
//   };
// }
// export function booksIsLoading(bool) {
//   return {
//       type: 'BOOKS_IS_LOADING',
//       isLoading: bool
//   };
// }
// export function booksFetchData() {
//   return function(dispatch) {
//     dispatch({type: "FETCH_TWEETS"});
//     axios.get(`https://www.googleapis.com/books/v1/volumes?q=harry+potter`)
//       .then((response) => {
//         console.log(response.data.items[0].volumeInfo.title)
//         dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
//       })
//   }
// }
