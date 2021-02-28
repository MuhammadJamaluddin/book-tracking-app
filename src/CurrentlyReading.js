import Book from './Book';

export const filterBooksByShelf = (books, shelf) =>
  books?.filter((book) => book.shelf === shelf);

const CurrentlyReading = ({ books, setBooks }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">Currently Reading</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {filterBooksByShelf(books, 'currentlyReading')?.map((book) => (
          <Book key={book.id} book={book} books={books} setBooks={setBooks} />
        ))}
      </ol>
    </div>
  </div>
);
export default CurrentlyReading;
