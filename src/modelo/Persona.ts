import { Auto } from './Auto';
import { Genero } from './Genero';

export interface Persona {
    id: string;
    nombre: string;
    apellido: string;
    dni: string;
    fechaNacimiento: Date;
    genero: string;
    esDonante: Genero;
    autos: Auto[];
}
