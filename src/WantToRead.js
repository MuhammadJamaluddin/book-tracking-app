const WantToRead = ({ books }) => {
  
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {books.map(({ id, title, authors, imageLinks: { thumbnail }  }) => {
          return (
<li key={id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ thumbnail })` }}></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ title}</div>
              {authors.map((author) =>
              <div className="book-authors">{author}</div>
              )}
            </div>
          </li>
          )
            
          
        })}
      </ol>
    </div>
  </div>
    )
}

export default WantToRead;
