import React from 'react';
import './App.css';
import Calendario from './Calendario';
import Agendamento from './Agendamento';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calendário de Agendamento</h1>
      </header>
      <Calendario />
      <div className="separador"></div>
      <Agendamento />
    </div>
  );
}

export default App;
