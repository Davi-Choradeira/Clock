import React from 'react';
import './Estilos.css';

function Analogico({ horario }) {
    const segundos = horario.getSeconds();
    const minutos = horario.getMinutes();
    const horas = horario.getHours();

    const estiloPonteiro = (graus) => ({
        transform: `rotate(${graus}deg)`,
    });

    const anguloSeg = segundos * 6;
    const anguloMin = minutos * 6 + segundos * 0.1;
    const anguloHora = ((horas % 12) + minutos / 60) * 30;

    return (
        <div className="ponteiro-relogio">
            <div className="ponteiro hora" style={estiloPonteiro(anguloHora)} />
            <div className="ponteiro minuto" style={estiloPonteiro(anguloMin)} />
            <div className="ponteiro segundo" style={estiloPonteiro(anguloSeg)} />
        </div>
    );
}

export default Analogico;
