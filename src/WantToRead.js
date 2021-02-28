import Book from './Book';

const WantToRead = ({ books, setBooks }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">Want To Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <Book key={book.id} book={book} setBooks={setBooks} />
        ))}
      </ol>
    </div>
  </div>
);

export default WantToRead;
