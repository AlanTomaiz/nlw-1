import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../Pages/Home';
import Create from '../Pages/Create';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/create/" component={Create} />
    </BrowserRouter>
  )
}

export default Routes;