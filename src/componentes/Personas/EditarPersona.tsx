import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from '../../api/apiService';
import { Genero } from '../../modelo/Genero';
import { Persona } from '../../modelo/Persona';
import { BotonVolver } from '../Botones/BotonVolver';
import { ListarAutos } from '../Autos/ListarAutos';

import '../../css/Formulario.css';

export const EditarPersona = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        fechaNacimiento: '',
        genero: '',
        esDonante: false
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await apiClient.get(`/personas/${id}`);
                const persona = res.data as Persona;
                setForm({
                    nombre: persona.nombre,
                    apellido: persona.apellido,
                    dni: persona.dni,
                    fechaNacimiento: new Date(persona.fechaNacimiento).toISOString().slice(0, 10),
                    genero: persona.genero,
                    esDonante: persona.esDonante as unknown as boolean
                });
            } catch (error) {
                console.error('Error al cargar persona:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
            setForm({
                ...form,
                [name]: e.target.checked
            });
        } else {
            setForm({
                ...form,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiClient.put(`/personas/${id}`, {
                ...form,
                fechaNacimiento: new Date(form.fechaNacimiento).toISOString()
            });
            navigate('/personas');
        } catch (error) {
            console.error('Error al actualizar persona:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Editar Persona</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    required
                />
                <input type="text" name="dni" value={form.dni} onChange={handleChange} readOnly />
                <input
                    type="date"
                    name="fechaNacimiento"
                    value={form.fechaNacimiento}
                    onChange={handleChange}
                    required
                />
                <select name="genero" value={form.genero} onChange={handleChange} required>
                    <option value="">Seleccione género</option>
                    <option value={Genero.Masculino}>Masculino</option>
                    <option value={Genero.Femenino}>Femenino</option>
                    <option value={Genero.NoBinario}>No Binario</option>
                </select>
                <label>
                    <input type="checkbox" name="esDonante" checked={form.esDonante} onChange={handleChange} /> Donante
                </label>
                <br />
                <button type="submit">Guardar Cambios</button>

                <BotonVolver entidad={'personas'} />

                <ListarAutos unDuenio={`${id}`} />
            </form>
        </div>
    );
};
