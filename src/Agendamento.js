import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Agendamento.css';

const Agendamento = () => {
  // Array de horários disponíveis
  const horariosDisponiveis = [];
  for (let hora = 8; hora < 19; hora++) {
    horariosDisponiveis.push(`${hora}:00`);
    horariosDisponiveis.push(`${hora}:30`);
  }
  horariosDisponiveis.push('19:00');

  // State para armazenar os horários selecionados pelo usuário
  const [horariosSelecionados, setHorariosSelecionados] = useState([]);
  // State para armazenar os horários agendados durante a sessão do usuário
  const [horariosAgendados, setHorariosAgendados] = useState([]);

  // Função para lidar com o clique em um horário
  const handleHorarioClick = (horario) => {
    if (horariosSelecionados.includes(horario)) {
      // Se o horário já estiver selecionado, remova da lista
      setHorariosSelecionados(horariosSelecionados.filter(h => h !== horario));
    } else {
      // Caso contrário, adicione à lista se não estiver agendado
      if (!horariosAgendados.includes(horario)) {
        setHorariosSelecionados([...horariosSelecionados, horario]);
      } else {
        toast.error('Este horário já está agendado.');
      }
    }
  };

  // Função para confirmar o agendamento
  const handleConfirmar = () => {
    setHorariosAgendados([...horariosAgendados, ...horariosSelecionados]);
    toast.success('Agendado com sucesso');
    setHorariosSelecionados([]);
  };

  return (
    <div className="agendamento">
      <ToastContainer />
      <h2>Agende um Horário</h2>
      <div className="slots-horarios">
        {/* Mapeia os horários disponíveis */}
        {horariosDisponiveis.map(horario => (
          <div key={horario} className="slot-horario">
            <button
              className={`botao-horario ${horariosSelecionados.includes(horario) ? 'selecionado' : horariosAgendados.includes(horario) ? 'agendado' : ''}`}
              onClick={() => handleHorarioClick(horario)}
              disabled={horariosAgendados.includes(horario)}
            >
              {horario}
            </button>
          </div>
        ))}
      </div>
      {/* Botão para confirmar o agendamento */}
      {horariosSelecionados.length > 0 && (
        <div className="confirmar-secao">
          <button className="botao-confirmar" onClick={handleConfirmar}>
            Confirmar Agendamento
          </button>
        </div>
      )}
    </div>
  );
};

export default Agendamento;
