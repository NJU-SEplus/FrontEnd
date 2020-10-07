import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.min.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';


import App from './App';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';


ReactDOM.render(
(  <Router>
    <Route path="/" component={App} exact/>
    <Route path="/t1" component={Test1}/>
    <Route path="/t2" component={Test2}/>
</Router>),
  document.getElementById('root')
);