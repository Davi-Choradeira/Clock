import React, { useState, useEffect } from 'react';
import './styles/DigitalClock.css';
import './styles/AnalogClock.css';
import './styles/FuturistClock.css';
import './styles/RetroClock.css';
import './styles/ClockThemes.css'; // Novo arquivo sugerido para os fundos

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [clockStyle, setClockStyle] = useState('digital');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderClock = () => {
    switch(clockStyle) {
      case 'analog':
        return <AnalogClock time={time} />;
      case 'futurist':
        return <FuturistClock time={time} />;
      case 'retro':
        return <RetroClock time={time} />;
      default:
        return <DigitalClock time={time} />;
    }
  };

  return (
    <div className={`clock-container ${clockStyle}`}>
      <h1>Relógio Estiloso</h1>
      {renderClock()}
      <div className="style-selector">
        {['digital', 'analog', 'futurist', 'retro'].map((style) => (
          <button
            key={style}
            className={clockStyle === style ? 'active' : ''}
            onClick={() => setClockStyle(style)}
          >
            {style.charAt(0).toUpperCase() + style.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

// Componente Digital
const DigitalClock = ({ time }) => (
  <div className="digital-clock">
    {time.toLocaleTimeString([], { hour12: false })}
  </div>
);

// Componente Analógico
const AnalogClock = ({ time }) => {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  return (
    <div className="analog-clock">
      <div className="clock-face">
        <div 
          className="hand hour-hand" 
          style={{ transform: `rotate(${hours * 30 + minutes * 0.5}deg)` }} 
        />
        <div 
          className="hand minute-hand" 
          style={{ transform: `rotate(${minutes * 6}deg)` }} 
        />
        <div 
          className="hand second-hand" 
          style={{ transform: `rotate(${seconds * 6}deg)` }} 
        />
        <div className="center-circle"></div>
      </div>
    </div>
  );
};

// Componente Futurista
const FuturistClock = ({ time }) => (
  <div 
    className="futurist-clock" 
    dangerouslySetInnerHTML={{
      __html: time.toLocaleTimeString([], { hour12: false })
        .split('')
        .map(char => char === ':' ? '<span class="blink">:</span>' : char)
        .join('')
    }} 
  />
);

// Componente Retro
const RetroClock = ({ time }) => (
  <div className="retro-clock">
    [{time.toLocaleTimeString([], { hour12: false })}]
  </div>
);

export default Clock;
