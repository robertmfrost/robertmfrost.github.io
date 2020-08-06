import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        {Object.keys(routes).map(path => (
          <Route key={path} exact path={path === 'table-of-contents' ? '' : `#${path}`} component={routes[path]} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
