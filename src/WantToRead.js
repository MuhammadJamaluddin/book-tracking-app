import Book from './Book';
import { filterBooksByShelf } from './CurrentlyReading';

const WantToRead = ({ books, setBooks }) => {
  console.log('books here', books);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want To Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {filterBooksByShelf(books, 'wantToRead')?.map((book) => (
            <Book key={book.id} book={book} books={books} setBooks={setBooks} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WantToRead;
