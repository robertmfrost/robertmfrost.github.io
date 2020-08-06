import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Routes
import NaturalLaw from './pages/natural-law';
import TableOfContents from './pages/table-of-contents';
import PageNotFound from './pages/page-not-found';

const routes = {
  "table-of-contents": TableOfContents,
  "natural-law": NaturalLaw,
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PageNotFound} />
        {Object.keys(routes).map(path => (
          <Route key={path} exact path={`/${path}`} component={routes[path]} />
        ))}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
