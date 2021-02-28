import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import SearchPage from './SearchPage';
import BooksList from './BooksList';
// import * as BooksAPI from './BooksAPI'

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route path="/search" component={SearchPage} />
      <Route exact path="/" component={BooksList} />
    </div>
  </BrowserRouter>
);

export default App;
