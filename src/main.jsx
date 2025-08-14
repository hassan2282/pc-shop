import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import Reducer from './Reducer.js';
import { createStore } from "redux"; // Correct
import React from 'react';
import Footer from './structure/footer.jsx';
import Header from './structure/Header.jsx';

const store = createStore(Reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <Header />
      <App />
      <Footer />

    </Provider>
  </React.StrictMode>
);
