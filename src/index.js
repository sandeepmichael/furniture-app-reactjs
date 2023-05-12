import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import Context from './components/context/Context';
import AuthProvider from './components/context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Context>
    <AuthProvider>
     <App />
     </AuthProvider>
 </Context>
 
 </BrowserRouter>
    
  
);

