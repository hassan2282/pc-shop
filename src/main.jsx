import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import React from 'react';
import Footer from './structure/footer.jsx';
import Header from './structure/Header.jsx';
import store from './store.js';

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
