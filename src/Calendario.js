import React, { useState } from 'react';
import './Calendario.css';

const Calendario = () => {
  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const [dataAtual, setDataAtual] = useState(new Date());
  const [diaSelecionado, setDiaSelecionado] = useState(new Date());

  const handleDayClick = (indice) => {
    const primeiroDiaDaSemana = new Date(dataAtual);
    primeiroDiaDaSemana.setDate(primeiroDiaDaSemana.getDate() - primeiroDiaDaSemana.getDay() + indice);
    setDiaSelecionado(primeiroDiaDaSemana);
  };

  const obterNumeroDoDia = (indice) => {
    const primeiroDiaDaSemana = new Date(dataAtual);
    primeiroDiaDaSemana.setDate(primeiroDiaDaSemana.getDate() - primeiroDiaDaSemana.getDay() + indice);
    return primeiroDiaDaSemana.getDate();
  };

  const isToday = (indice) => {
    const hoje = new Date();
    const dataParaVerificar = new Date(dataAtual);
    dataParaVerificar.setDate(dataParaVerificar.getDate() - dataParaVerificar.getDay() + indice);
    return hoje.toDateString() === dataParaVerificar.toDateString();
  };

  return (
    <div className="calendario">
      <div className="navegacao">
        <button onClick={() => setDataAtual(new Date(dataAtual.setDate(dataAtual.getDate() - 7)))}>&lt;</button>
        <div>
          {mesesDoAno[dataAtual.getMonth()]} {dataAtual.getFullYear()}
        </div>
        <button onClick={() => setDataAtual(new Date(dataAtual.setDate(dataAtual.getDate() + 7)))}>&gt;</button>
      </div>
      <div className="dias-container">
        {diasDaSemana.map((dia, indice) => (
          <div
            key={dia}
            className={`dia ${isToday(indice) ? 'dia-atual' : ''} ${diaSelecionado.toDateString() === new Date(dataAtual.getFullYear(), dataAtual.getMonth(), obterNumeroDoDia(indice)).toDateString() ? 'selecionado' : ''}`}
            onClick={() => handleDayClick(indice)}
          >
            {dia}
            <br />
            {obterNumeroDoDia(indice)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendario;
