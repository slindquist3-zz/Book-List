export function selectBook(book) {
  //selectBook is an ActionCreater
  //needs to return an action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
