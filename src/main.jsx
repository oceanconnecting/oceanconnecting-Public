import { render } from 'preact';
import App from './app';
import './index.css'
// Ensure the selector matches the ID of your root element in index.html
const rootElement = document.getElementById('root');
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { SpeedInsights } from '@vercel/speed-insights/react';
import ReactGa from 'react-ga'
import { SpeedInsights } from "@vercel/speed-insights/next"
ReactGa.initialize('G-7VD9KSTCK9')
import './components/i18n'
if (rootElement) {
  render(
  <BrowserRouter><App />,</BrowserRouter>,
   rootElement);
} else {
  console.error('Root element not found! Ensure there is a <div id="root"></div> in your index.html.');
}
