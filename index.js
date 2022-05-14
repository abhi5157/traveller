import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


// import { createRoot } from 'react-dom/client';
// import App from './App';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
