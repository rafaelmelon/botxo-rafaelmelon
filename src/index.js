import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import App from "./container/App.jsx";

ReactDOM.render( < App / > ,
  document.getElementById('app')
);

module.hot.accept();