import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/apiService';

import '../../css/Formulario.css';

export const CrearAuto = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        marca: '',
        modelo: '',
        anio: new Date().getFullYear(),
        patente: '',
        color: '',
        numeroChasis: '',
        numeroMotor: '',
        duenio: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: name === 'anio' ? parseInt(value) : value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiClient.post('/auto', form);
            navigate('/autos');
        } catch (error) {
            console.error('Error al crear auto:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Crear Auto</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="marca"
                    placeholder="Marca"
                    value={form.marca}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="modelo"
                    placeholder="Modelo"
                    value={form.modelo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="anio"
                    placeholder="Anio"
                    value={form.anio}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="patente"
                    placeholder="Patente"
                    value={form.patente}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="color"
                    placeholder="Color"
                    value={form.color}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="numeroChasis"
                    placeholder="Numero de Chasis"
                    value={form.numeroChasis}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="numeroMotor"
                    placeholder="Numero de Motor"
                    value={form.numeroMotor}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="duenio"
                    placeholder="DNI del Dueño"
                    value={form.duenio}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">Guardar Auto</button>
            </form>
        </div>
    );
};
