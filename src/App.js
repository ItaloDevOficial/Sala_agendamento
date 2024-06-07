import React from 'react';
import './App.css';
import Calendario from './Calendario';
import Agenda from './Agenda';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Agendamento de Salas</h1>
      </header>
      <div className="calendar-container">
        <Calendario />
      </div>
      <div className="schedule-container">
        <Agenda />
      </div>
    </div>
  );
}

export default App;
