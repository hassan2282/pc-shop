import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import store from './store.js';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);
