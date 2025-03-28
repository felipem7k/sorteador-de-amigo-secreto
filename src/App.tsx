import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PaginaBase from './componentes/PaginaBase';
import { Configuracao } from './paginas/Configuracao';
import Sorteio from './paginas/Sorteio';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route index element={<Configuracao />}></Route>
            <Route path='sorteio' element={<Sorteio />}></Route>
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
