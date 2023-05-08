
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import { HerosApp } from './HerosApp'


ReactDOM.createRoot(
   document.getElementById("root")
).render(
  
      <BrowserRouter>
         <HerosApp />
      </BrowserRouter>
  
);
