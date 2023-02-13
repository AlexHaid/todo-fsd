import ReactDOM from 'react-dom/client';
import App from './app';

const root = document.getElementById('root') as HTMLElement;

if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(<App />);
}
