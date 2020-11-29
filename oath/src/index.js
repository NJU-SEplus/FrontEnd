import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.min.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';


import Author from './pages/Author';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';


ReactDOM.render(
(  <Router>
    <Route path="/" component={Home} exact/>
    <Route path="/authorprofile/:id" component={Author}/>
    <Route path="/result" component={SearchResult} />
  </Router>),
  document.getElementById('root')
);