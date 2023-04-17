import React, { useState } from 'react';

interface Cliente {
  identidad: number;
  nombre: string;
  apellido: string;
  email: string;
  genero: string;
  fechaNac: string;
  notas: string;
}

interface FormularioClienteProps {
  onSubmit: (cliente: Cliente) => void;
}

const FormularioCliente: React.FC<FormularioClienteProps> = ({ onSubmit }) => {
  const [cliente, setCliente] = useState<Cliente>({
    identidad: 0,
    nombre: '',
    apellido: '',
    email: '',
    genero: '',
    fechaNac: '',
    notas: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCliente(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(cliente);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Identidad:
        <input type="number" name="identidad" onChange={handleChange} />
      </label>
      <br />
      <label>
        Nombre:
        <input type="text" name="nombre" onChange={handleChange} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" name="apellido" onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <br />
      <label>
        Género:
        <input type="text" name="genero" onChange={handleChange} />
      </label>
      <br />
      <label>
        Fecha de Nacimiento:
        <input type="date" name="fechaNac" onChange={handleChange} />
      </label>
      <br />
      <label>
        Notas:
        <input type="text" name="notas" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Agregar Cliente</button>
    </form>
  );
};

export default FormularioCliente;