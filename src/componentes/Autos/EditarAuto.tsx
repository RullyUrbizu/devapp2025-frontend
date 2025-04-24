import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../../api/apiService';
import { Auto } from '../../modelo/Auto';

import '../../css/Formulario.css';

export const EditarAuto = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        marca: '',
        modelo: '',
        anio: 0,
        patente: '',
        color: '',
        numeroChasis: '',
        numeroMotor: '',
        duenio: ''
    });

    useEffect(() => {
        const fetchAuto = async () => {
            try {
                const res = await apiClient.get(`/auto/${id}`);
                const auto: Auto = res.data as Auto;

                setForm({
                    marca: auto.marca,
                    modelo: auto.modelo,
                    anio: auto.anio,
                    patente: auto.patente,
                    color: auto.color,
                    numeroChasis: auto.numeroChasis,
                    numeroMotor: auto.numeroMotor,
                    duenio: auto.duenio
                });
            } catch (error) {
                console.error('Error al cargar auto:', error);
            }
        };

        fetchAuto();
    }, [id]);

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
            await apiClient.put(`/auto/${id}`, form);
            navigate('/autos');
        } catch (error) {
            console.error('Error al actualizar auto:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Editar Auto</h2>
            <form onSubmit={handleSubmit}>
                <input name="marca" placeholder="Marca" value={form.marca} onChange={handleChange} required />
                <input name="modelo" placeholder="Modelo" value={form.modelo} onChange={handleChange} required />
                <input
                    type="number"
                    name="anio"
                    placeholder="Anio"
                    value={form.anio}
                    onChange={handleChange}
                    required
                />
                <input name="patente" placeholder="Patente" value={form.patente} onChange={handleChange} required />
                <input name="color" placeholder="Color" value={form.color} onChange={handleChange} required />
                <input
                    name="numeroChasis"
                    placeholder="Numero Chasis"
                    value={form.numeroChasis}
                    onChange={handleChange}
                    required
                />
                <input
                    name="numeroMotor"
                    placeholder="Numero Motor"
                    value={form.numeroMotor}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};
