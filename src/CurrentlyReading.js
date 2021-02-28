import Book from './Book';

const CurrentlyReading = ({ books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">Currently Reading</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <Book book={book} />
        ))}
      </ol>
    </div>
  </div>
);

export default CurrentlyReading;
