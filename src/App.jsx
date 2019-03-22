import React from 'react';
import ReactDom from 'react-dom';
import StoreProvider from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(<h1>Hello World</h1>, document.getElementById('root'));
});
