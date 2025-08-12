import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import store from './store'
import Reducer from './Reducer';


const store = createStore(Reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
