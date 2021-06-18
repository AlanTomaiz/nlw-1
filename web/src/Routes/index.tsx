import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../Pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  )
}

export default Routes;