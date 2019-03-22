import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(<Root />, document.getElementById('root'));
});
