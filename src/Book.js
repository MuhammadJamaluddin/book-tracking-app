import { useCallback } from 'react';

const Book = ({ book, books, setBooks }) => {
  const {
    shelf,
    title,
    authors,
    imageLinks: { thumbnail },
  } = book;

  const handleChange = useCallback(
    (selectedBookTitle, event) => {
      const option = event.target.value;

      setBooks(
        books.map((inspectedBook) =>
          inspectedBook.title === selectedBookTitle
            ? { ...inspectedBook, shelf: option }
            : inspectedBook
        )
      );
    },
    [books, setBooks]
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
              backgroundImage: `url(${thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={(event) => handleChange(title, event)}
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
        {authors.map((author) => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))}
      </div>
    </li>
  );
};

export default Book;
