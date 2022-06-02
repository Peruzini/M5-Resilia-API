import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import CatalogoSimples from './Pages/CatalogoSimples/CatalogoSimples';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/catalogo">
          <Header />
          <CatalogoSimples />
          <Footer />
        </Route>
        <Route path="/tatuadores">
          <Header />
          <Footer />
        </Route>
    </BrowserRouter>
  )
}

export default App
