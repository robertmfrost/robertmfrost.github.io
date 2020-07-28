import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Routes
import NaturalLaw from './pages/natural-law';
import TableOfContents from './pages/table-of-contents';

const routes = {
  "table-of-contents": TableOfContents,
  "natural-law": NaturalLaw,
}

function App() {
  return (
    <Router>
      {Object.keys(routes).map(path => (
        <Route key={path} path={`/${path}`} component={routes[path]} />
      ))}
    </Router>
  );
}

export default App;
