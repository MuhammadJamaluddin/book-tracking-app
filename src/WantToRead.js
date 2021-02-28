import Book from './Book';

const WantToRead = ({ books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <Book book={book} />
        ))}
      </ol>
    </div>
  </div>
);

export default WantToRead;
