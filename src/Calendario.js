import React, { useState } from 'react';
import './Calendario.css';

const WeekCalendar = () => {
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const monthsOfYear = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());

  const handleDayClick = (index) => {
    const firstDayOfWeek = new Date(currentDate);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay() + index);
    setSelectedDay(firstDayOfWeek);
  };

  const getDayNumber = (index) => {
    const firstDayOfWeek = new Date(currentDate);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay() + index);
    return firstDayOfWeek.getDate();
  };

  const isToday = (index) => {
    const today = new Date();
    const dateToCheck = new Date(currentDate);
    dateToCheck.setDate(dateToCheck.getDate() - dateToCheck.getDay() + index);
    return today.toDateString() === dateToCheck.toDateString();
  };

  return (
    <div className="week-calendar">
      <div className="navigation">
        <button onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)))}>&lt;</button>
        <div>
          {monthsOfYear[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <button onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)))}>&gt;</button>
      </div>
      <div className="days-container">
        {daysOfWeek.map((day, index) => (
          <div
            key={day}
            className={`day ${isToday(index) ? 'current-day' : ''} ${selectedDay.toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), getDayNumber(index)).toDateString() ? 'selected' : ''}`}
            onClick={() => handleDayClick(index)}
          >
            {day}
            <br />
            {getDayNumber(index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;
