import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getAll } from './BooksAPI';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import WantToRead from './WantToRead';

const filterBooksByShelf = (books, shelf) =>
  books.filter((book) => book.shelf === shelf);

const BooksList = () => {
  const [currentlyReadingList, setCurrentlyReadingList] = useState([]);
  const [wantToReadList, setWantToReadList] = useState([]);
  const [readList, setReadList] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    getAll().then((bookList) => {
      console.log('man', bookList);
      setCurrentlyReadingList(filterBooksByShelf(bookList, 'currentlyReading'));
      setWantToReadList(filterBooksByShelf(bookList, 'wantToRead'));
      setReadList(filterBooksByShelf(bookList, 'read'));
    });
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading books={currentlyReadingList} />
          <Read books={readList} />
          <WantToRead books={wantToReadList} />
        </div>
      </div>
      <div className="open-search">
        <button type="button" onClick={() => push('/search')}>
          Add a book
        </button>
      </div>
    </div>
  );
};

export default BooksList;
