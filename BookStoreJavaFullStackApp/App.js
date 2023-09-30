// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import BookList from './components/BookList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/authors" component={AuthorList} />
        <Route path="/books" component={BookList} />
      </Switch>
    </Router>
  );
}

export default App;
