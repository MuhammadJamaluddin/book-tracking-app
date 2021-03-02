import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import SearchPage from './SearchPage';
import BooksList from './BooksList';

const App = () => {
  const [books, setBooks] = useState([]);

  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/search" render={() => <SearchPage books={books} />} />
        <Route
          exact
          path="/"
          render={() => <BooksList books={books} setBooks={setBooks} />}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
