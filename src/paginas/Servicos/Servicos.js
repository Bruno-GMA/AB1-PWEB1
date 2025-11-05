import './servicos.css';

import { useEffect,useState } from 'react';

import Axios from 'axios';

export default function Servicos() {
  const [values, setValues] = useState({
    img: "",
    titulo: "",
    descricao: "",
    cidade: "",
  });

  const handleChangeValues = (value) => {
    setValues(
      (prevValue) => (
        { ...prevValue, [value.target.name]: value.target.value }
      )
    );
    console.log(values);
  }
    // Empurrando dados pro BD
    const handleClickButton = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register",
      {
        img: values.img,
        titulo: values.titulo,
        descricao: values.descricao,
        cidade: values.cidade,
      }
    )
  };

  //Salva os dados que vem do BD
  const [listaLocais, setListaLocais] = useState();
  // Busca os dados
  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListaLocais(response.data);
    })
  }, [])

  return (
    <>
    <section>
      <form className='form-servicos'>
        <h3>Adicionar Locais</h3>
        <input type="text" name="img" placeholder="Imagem" onChange={handleChangeValues}/>
        <input type="text" name="titulo" placeholder="Título" onChange={handleChangeValues}/>
        <input type="text" name="descricao" placeholder="Descrição" onChange={handleChangeValues}/>
        <input type="text" name="cidade" placeholder="Cidade" onChange={handleChangeValues}/>
        <button type="submit" onClick={handleClickButton}>Adicionar</button>
      </form>
      <div className='container-cards'>
        {typeof listaLocais !== "undefined" && listaLocais.map((value) => {
          return(
            <div className='card' key={value.id}>
              <img src={value.img} alt={value.titulo} />
              <h3>{value.titulo}</h3>
              <p>{value.descricao}</p>
              <span>{value.cidade}</span>
            </div>
          )})}
      </div>
    </section>
    </>
  );
}