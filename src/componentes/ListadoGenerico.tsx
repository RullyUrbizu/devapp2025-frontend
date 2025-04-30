import '../css/Listados.css';
import React from 'react';
import { Auto } from '../modelo/Auto';
import { Persona } from '../modelo/Persona';

interface ListadoProps<Elemento extends Persona | Auto> {
    titulo: string;
    elementos: Elemento[];
    valor1: keyof Elemento;
    valor2: keyof Elemento;
    valor3: keyof Elemento;
    columna1: string;
    columna2: string;
    columna3: string;
    acciones: (elemento: Elemento) => React.ReactNode;
    botonNuevo?: React.ReactNode;
    botonVolver?: React.ReactNode;
}

export function ListadoGenerico<Elemento extends Persona | Auto>({
    titulo,
    elementos,
    valor1,
    valor2,
    valor3,
    columna1,
    columna2,
    columna3,
    acciones,
    botonNuevo,
    botonVolver
}: ListadoProps<Elemento>) {
    return (
        <div className="autos-container">
            <h2>{titulo}</h2>
            {botonNuevo}
            <table className="autos-table">
                <thead>
                    <tr>
                        <th>{columna1}</th>
                        <th>{columna2}</th>
                        <th>{columna3}</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {elementos.map((elemento) => (
                        <tr key={elemento.id}>
                            <td>{String(elemento[valor1])}</td>
                            <td>{String(elemento[valor2])}</td>
                            <td>{String(elemento[valor3])}</td>
                            <td className="acciones">{acciones(elemento)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            {botonVolver}
        </div>
    );
}
