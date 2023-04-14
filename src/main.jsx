import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ImprimirNombre } from './FirstApp';
import './index.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <ImprimirNombre esposa="Bella Rosales" edadEsposa={23} /> */}
        <CounterApp value={1} />
    </React.StrictMode>
)