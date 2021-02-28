import Book from './Book';

const Read = ({ books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">Want to Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <Book book={book} />
        ))}
      </ol>
    </div>
  </div>
);

export default Read;
