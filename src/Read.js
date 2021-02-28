import Book from './Book';

const Read = ({ books, setBooks }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <Book key={book.id} book={book} setBooks={setBooks} />
        ))}
      </ol>
    </div>
  </div>
);

export default Read;
