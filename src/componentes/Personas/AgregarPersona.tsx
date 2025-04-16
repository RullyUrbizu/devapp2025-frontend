import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/apiService';
import { Genero } from '../../modelo/Genero';

export const CrearPersona = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        fechaNacimiento: '',
        genero: '',
        esDonante: false
    });

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
            await apiClient.post('/persona', {
                ...form,
                fechaNacimiento: new Date(form.fechaNacimiento).toISOString(),
                autos: []
            });
            navigate('/personas');
        } catch (error) {
            console.error('Error al crear persona:', error);
        }
    };

    return (
        <div>
            <h2>Crear Persona</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    required
                />
                <br />
                <input type="text" name="dni" placeholder="DNI" value={form.dni} onChange={handleChange} required />
                <br />
                <input
                    type="date"
                    name="fechaNacimiento"
                    value={form.fechaNacimiento}
                    onChange={handleChange}
                    required
                />
                <br />
                <select name="genero" value={form.genero} onChange={handleChange} required>
                    <option value="">Seleccione genero</option>
                    <option value={Genero.Masculino}>Masculino</option>
                    <option value={Genero.Femenino}>Femenino</option>
                    <option value={Genero.NoBinario}>Otro</option>
                </select>
                <br />
                <label>
                    <input type="checkbox" name="esDonante" checked={form.esDonante} onChange={handleChange} /> Donante
                </label>
                <br />
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};
