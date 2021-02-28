import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getAll } from './BooksAPI';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import WantToRead from './WantToRead';

const filterBooksByShelf = (books, shelf) =>
  books.filter((book) => book.shelf === shelf);

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    getAll().then((bookList) => {
      console.log('man', bookList);
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
          <CurrentlyReading
            books={filterBooksByShelf(books, 'currentlyReading')}
            setBooks={setBooks}
          />
          <WantToRead
            books={filterBooksByShelf(books, 'wantToRead')}
            setBooks={setBooks}
          />
          <Read books={filterBooksByShelf(books, 'read')} setBooks={setBooks} />
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
