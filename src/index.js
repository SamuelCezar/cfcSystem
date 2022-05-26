import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./view/Dashboard/Dashboard";
import Login from "./view/Login/Login";
import Orders from "./view/Dashboard/Orders";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Dashboard/>}/>
            <Route path={"login"} element={<Login/>}/>
            <Route path={"recibos"} element={<Orders/>}/>
        </Routes>
    </BrowserRouter>

);

// https://iwhejdbwniqsdwlkklgj.supabase.co

