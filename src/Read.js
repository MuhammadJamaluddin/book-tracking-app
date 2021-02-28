import Book from './Book';
import { filterBooksByShelf } from './CurrentlyReading';

const Read = ({ books, setBooks }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {filterBooksByShelf(books, 'read')?.map((book) => (
          <Book key={book.id} book={book} books={books} setBooks={setBooks} />
        ))}
      </ol>
    </div>
  </div>
);

export default Read;
