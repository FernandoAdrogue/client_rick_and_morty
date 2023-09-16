import React from 'react'
//import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './redux/store'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>);

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// )
// Importa createRoot desde 'react-dom'

// En lugar de usar ReactDOM.render, usa createRoot
