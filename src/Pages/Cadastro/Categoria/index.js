import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PagesDefault';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';

export default function CadastroCategoria() {
  const valoresInicias = {
    name: '',
    description: '',
    color: '',
  };
  const [values, setValues] = useState(valoresInicias);
  const [categorias, setCategorias] = useState([]);

  function setValue(id, value) {
    // id: nome do campo (nome, descrição ou cor)
    setValues({
      ...values,
      [id]: value, // name: valor, description: valor
    });
  }

  function handleChange(e) {
    setValue(e.target.name, e.target.value);
  }

  useEffect(() => {
    const baseUrl = 'http://localhost:8080/categorias';
    fetch(baseUrl).then(async (resq) => {
      const Response = await resq.json();
      console.log(Response);
      setCategorias([...Response]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Categoria:
        {values.name}
      </h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();

          setCategorias([...categorias, values]);
          setValues(valoresInicias);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria.name}${index}`}>{categoria.name}</li>
        ))}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}
