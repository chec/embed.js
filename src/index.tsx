import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Embed from './Embed';

// Create a container and append it to the end of the body
const embedContainer = document.createElement('div');
embedContainer.setAttribute('id', 'ched-embed');
document.getElementsByTagName('body')[0].appendChild(embedContainer);

ReactDOM.render(
  <React.StrictMode>
    <Embed />
  </React.StrictMode>,
  embedContainer
);
