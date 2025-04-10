import { Auto } from './Auto';
import { Genero } from './Genero';

export interface Persona {
    nombre: string;
    apellido: string;
    dni: string;
    fechaNacimiento: Date;
    genero: string;
    esDonante: Genero;
    autos: Auto[];
}
