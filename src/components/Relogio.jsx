import React, { useState, useEffect } from 'react';
import Analogico from './Analogico';
import './Estilos.css';

function Relogio() {
    const [horario, setHorario] = useState(new Date());
    const [estilo, setEstilo] = useState('digital');

    useEffect(() => {
        const timer = setInterval(() => {
            setHorario(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const renderConteudo = () => {
        switch (estilo) {
            case 'digital':
                return <h2 key="digital">{horario.toLocaleTimeString()}</h2>;
            case 'analogico':
                return <Analogico key="analogico" horario={horario} />;
            case 'futurista':
                return (
                    <h2 key="futurista">
                        {horario.getHours()}h {horario.getMinutes()}m {horario.getSeconds()}s
                    </h2>
                );
            case 'retro':
                return <h2 key="retro">[{horario.toLocaleTimeString()}]</h2>;
            default:
                return null;
        }
    };

    const estilos = ['digital', 'analogico', 'futurista', 'retro'];

    return (
        <div className={`relogio-container ${estilo}`}>
            <h1>Relógio Estiloso</h1>
            {renderConteudo()}

            <div className="botoes">
                {estilos.map((tipo) => (
                    <button
                        key={tipo}
                        onClick={() => setEstilo(tipo)}
                        className={estilo === tipo ? 'ativo' : ''}
                    >
                        {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Relogio;
