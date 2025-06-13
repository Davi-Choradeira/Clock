import React, { useState, useEffect } from 'react';
import './Estilos.css';

function Relogio() {
    const [horario, setHorario] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setHorario(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relogio-container">
            <h1>Relógio Digital</h1>
            <h2>{horario.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Relogio;