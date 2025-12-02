import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // misma carpeta =mismo orden (.) - Aplica para todo el proyecto
//import './gifs/index.css'//dentro de una carpeta llamada gifs (/)

import { GifsApp } from './GifsApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp/>
   {/* < MyCounterApp/> */}
  </StrictMode>,
)
