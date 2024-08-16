import React from 'react';
import './App.css';

import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias.tsx';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria.tsx';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria.tsx';


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;