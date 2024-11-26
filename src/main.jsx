import { render } from 'preact';
import App from './app';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGa from 'react-ga';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './components/i18n';

ReactGa.initialize('G-7VD9KSTCK9');

const rootElement = document.getElementById('root');
if (rootElement) {
  render(
    <BrowserRouter>
     <SpeedInsights/>
     <Analytics/>
          <App/>
    </BrowserRouter>,
    rootElement
  );
} else {
  console.error('Root element not found! Ensure there is a <div id="root"></div> in your index.html.');
}
