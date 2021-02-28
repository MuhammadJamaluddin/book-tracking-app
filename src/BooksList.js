import { useHistory } from 'react-router-dom'

import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import WantToRead from './WantToRead'

const BooksList = ({ setShowSearchPage }) => {
    const {  push } = useHistory();
  
  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <CurrentlyReading />
        <Read />
        <WantToRead />
      </div>
    </div>
    <div className="open-search">
      <button onClick={() => push('/search')}>Add a book</button>
    </div>
  </div>
    )
}

export default BooksList;
