import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import 'config/axios';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

reportWebVitals();
