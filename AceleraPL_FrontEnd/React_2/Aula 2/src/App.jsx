import { useState, useEffect } from 'react'
import "./App.css"
import Cabecalho from './Cabecalho'
import Section from './Section'
import axios from 'axios'

export default function App() {

  const [Sobre, setSobre] = useState("");
  const [IdAluno, setIdAluno] = useState(' ');
  const [ImgAvatar, setImgAvatar] = useState('imagens/avatar.jpeg');

  const baseURL = "http://plugbrasil.solutions:3333/sobre?aluno=" + IdAluno;
  const baseURLAvatar = "http://plugbrasil.solutions:3333/avatar?aluno=" + IdAluno;

  useEffect(() => {

    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    setIdAluno(params.get('IDALUNO'));



  }, []);

  axios.get(baseURL).then((response) => {
    //console.log(response.data[0]);
    setSobre(response.data);

  });

  axios.get(baseURLAvatar).then((response) => {
    console.log("Retornou OK!");
    const url = URL.createObjectURL(response.data)
    setImgAvatar(resnponse.data);

  });
  return (
    <>
      <Cabecalho imagem={ImgAvatar} />
      <Section titulo="Sobre mim" subtitulo={Sobre.sobre} tipo="sobre" />
      <Section tipo="filmes" titulo="Ultimos Filmes assistidos" subtitulo="Gosto banstante de filmes atuais, esses são os ultimos assistidos no cinema." />
      <Section tipo="contatos" titulo="Meus Contatos" subtitulo="Entre em contato comigo nas redes abaixo" />
    </>
  )
}
