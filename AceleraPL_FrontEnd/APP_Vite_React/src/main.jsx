import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx';
import ListItem from './components/ListItem.jsx';

const movieListData = [
  {
    href: "https://www.imdb.com/title/tt0210234/?ref_=fn_al_tt_1",
    src: "https://m.media-amazon.com/images/I/71Po4A2VLFL._SY385_.jpg",
    alt: "Pokemon 2000 | Movie Image"
  },
  {
    href: "https://www.imdb.com/title/tt0120815/mediaviewer/rm3623714817/?ref_=tt_ov_i",
    src: "https://m.media-amazon.com/images/I/51NSRG44D0L._SY385_.jpg",
    alt: "O Resgate do Soldado Ryan | Movie Image"
  },
  {
    href: "https://www.imdb.com/title/tt0185906/mediaviewer/rm1833146624/?ref_=tt_ov_i",
    src: "https://m.media-amazon.com/images/I/51ABqKdrRnL._SY445_SX342_.jpg",
    alt: "O Senhor dos Anéis: O Retorno do Rei | Movie Image"
  },
]

const careerProjectData = [
  {
    href: "https://www.linkedin.com/in/marcofsa/",
    src: "https://img.icons8.com/nolan/64/linkedin.png",
    alt: "Marcos de Sá Filho | LinkedIn"
  },
  {
    href: "https://github.com/Marcofsa",
    src: "https://img.icons8.com/nolan/64/github.png",
    alt: "Marcos de Sá Filho | Github"
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />

    <main>
      <Section title="About me:"
        subtitle="Me chamo Marcos Antonio Alves de Sá Filho, sou bacharel em Direito por formação, cursei Ciência da Computação em 2014, tranquei o curso em 2016, Retomei os estudos em Ciência da Computação em 2022. Desde criança sou apaixonado por tecnologia e faça dessa minha paixão a minha profissão atualmente."
      />
      <Section title="Experiência:"
        subtitle="Estou atualmente atuando com Dynamics 365 com C# e JS.
                  Trabalho na Atos Brasil atualmente e fazendo alguns projetos pessoais com fundo de aprendizado e aperfeiçoamento profissional e pessoal."
        className="social-list">
        {
          careerProjectData.map((item) => {
            return (
              <ListItem
                href={item.href}
                src={item.src}
                alt={item.alt}
              />
            )
          })
        }

      </Section>

      <Section title="Filmes e Séries" subtitle="Algo que já assisti bastante:" className="movies-list">

        {
          movieListData.map((item) => {
            return (
              <ListItem
                href={item.href}
                src={item.src}
                alt={item.alt}
              />
            )
          })
        }

      </Section>
    </main>
  </>
);
