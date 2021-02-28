import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import SearchPage from './SearchPage';
import BooksList from './BooksList';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route path="/search" component={SearchPage} />
      <Route exact path="/" component={BooksList} />
    </div>
  </BrowserRouter>
);

export default App;
