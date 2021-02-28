import { useState } from 'react';
import './App.css';
import SearchPage from './SearchPage'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import WantToRead from './WantToRead'

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false)
  
  return (
    <div className="app">
    {showSearchPage ? ( <SearchPage setShowSearchPage={setShowSearchPage} />
    ) : (
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
          <button onClick={() => setShowSearchPage(true)}>Add a book</button>
        </div>
      </div>
    )}
  </div>
  );
}

export default App;
