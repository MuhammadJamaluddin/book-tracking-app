import { useCallback } from 'react';

import { update } from './BooksAPI';

const Book = ({ book, books, setBooks, myBooks }) => {
  const { shelf, title, authors, id } = book;

  const handleChange = useCallback(
    (event) => {
      const option = event.target.value;

      setBooks(
        books.map((inspectedBook) =>
          inspectedBook.id === id
            ? { ...inspectedBook, shelf: option }
            : inspectedBook
        )
      );

      update(book, option);
    },
    [book, books, setBooks, id]
  );

  const checkShelf = useCallback(
    (currentBookId) => {
      const myBook = myBooks.find(
        (currentBook) => currentBook.id === currentBookId
      );
      return myBook?.shelf;
    },
    [myBooks]
  );

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={(shelf || checkShelf(id)) ?? 'none'}
              onChange={handleChange}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {authors?.map((author) => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))}
      </div>
    </li>
  );
};

export default Book;
