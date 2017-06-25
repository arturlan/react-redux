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
export function booksFetchDataSuccess(books) {
    return {
        type: 'BOOKS_FETCH_DATA_SUCCESS',
        books
    };
}
