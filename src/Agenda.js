import React, { useState } from 'react';
import './Agenda.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Agenda = () => {
  // Gerar horários de 30 em 30 minutos das 8h às 19h
  const times = [];
  for (let hour = 8; hour < 19; hour++) {
    times.push(`${hour}:00`);
    times.push(`${hour}:30`);
  }
  times.push('19:00');

  const [selectedTimes, setSelectedTimes] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleTimeClick = (time) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter(t => t !== time));
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  const handleConfirm = () => {
    toast.success('Agendado com sucesso');
    setSelectedTimes([]);
  };

  return (
    <div className="Agenda">
      <div className='Agenda2'>
      <ToastContainer />
      <h2>Agende um Horário</h2>
      <div className="time-slots">
        {times.map(time => (
          <div key={time} className="time-slot">
            <button
              className={selectedTimes.includes(time) ? 'selected' : ''}
              onClick={() => handleTimeClick(time)}
              disabled={selectedTimes.includes(time)}
            >
              {time}
            </button>
          </div>
        ))}
      </div>
      </div> 
      <div className='button'>
      {selectedTimes.length > 0 && (
        <button className="confirm-button" onClick={handleConfirm}>
          Confirmar Agendamento
        </button>
      )}
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      </div>
    </div>
    
  );
};

export default Agenda;
