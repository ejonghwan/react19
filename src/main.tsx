// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { TestContext } from './context/TestContext.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/react19">
    <TestContext>
      <App />
    </TestContext>
  </BrowserRouter>

  // <StrictMode>
  //   <App />
  // </StrictMode>,
);

const log = console.log;

log('???', document.querySelector('[data-aa="bb"]')?.closest('[data-aa="aa"]'));
