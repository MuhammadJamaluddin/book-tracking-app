import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { search } from './BooksAPI.js';
import Book from './Book';

const SearchPage = () => {
  const { push } = useHistory();
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleChange = useCallback((event) => {
    if (event.target.value === '') {
      setQuery('');
      setNoResults(false);
      setSearchedBooks([]);
      return;
    }

    setQuery(event.target.value);

    search(event.target.value).then((booksData) => {
      if (booksData?.error === 'empty query') {
        setNoResults(true);
      } else {
        setNoResults(false);
        setSearchedBooks(booksData);
      }
    });
  }, []);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          type="button"
          className="close-search"
          onClick={() => push('/')}
        >
          Close
        </button>
        <div className="search-books-input-wrapper">
          {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {noResults ? (
            <h1>No results were found!</h1>
          ) : (
            searchedBooks?.map((book) => (
              <Book
                key={book.id}
                book={book}
                books={searchedBooks}
                setBooks={setSearchedBooks}
              />
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
