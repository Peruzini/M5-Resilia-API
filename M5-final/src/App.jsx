import React from 'react'
import './reset_css/reset.css'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Catalogo from './Pages/Catalogo/Catalogo';
import Tatuadores from './Pages/Tatuadores/Tatuadores';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NovoItem from './Components/NovoItem/NovoItem';

import Acessorios from './Pages/Galeria/Galeria';



function App() {
  return (
    <><BrowserRouter>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/catalogo">
        <Catalogo />
        <Route path="/acessorios">
          <Acessorios />
        </Route>
      </Route>
      <Route path="/cadastro">
        <NovoItem />
      </Route>
      <Route path="/tatuadores">
        <Tatuadores />
      </Route>
        <Footer />
      </BrowserRouter></>

  )
}

export default App