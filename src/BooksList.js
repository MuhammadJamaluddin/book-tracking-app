import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getAll } from './BooksAPI';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import WantToRead from './WantToRead';

const BooksList = ({ books, setBooks }) => {
  const { push } = useHistory();

  useEffect(() => {
    getAll().then((bookList) => {
      setBooks(bookList);
    });
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading books={books} setBooks={setBooks} />
          <WantToRead books={books} setBooks={setBooks} />
          <Read books={books} setBooks={setBooks} />
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
