import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from './components/Header'
import Footer from "./components/Footer"

import Inicio from './pages/Inicio'
import Detalhes from './pages/Detalhes'
import AdicionarNova from './pages/AdicionarNova'

function RoutesApp(){
    return(
        <BrowserRouter>         
            <Header/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/detalhes" element={<Detalhes/>}/>
                <Route path="/adicionar" element={<AdicionarNova/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;