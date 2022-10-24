import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { firestoreInit } from './firebase/config';

firestoreInit()

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
)
