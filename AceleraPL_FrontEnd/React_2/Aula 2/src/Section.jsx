import { useState, useEffect } from "react";
import Item from "./Item";
import ItemLink from "./ItemLink";
import axios from "axios";

export default function Section(props) {

    const [itens, setItens] = useState([]);
    const [IdAluno, setIdAluno] = useState(' ');

    const baseURL = "http://plugbrasil.solutions:3333/filmes?aluno=" + IdAluno;

    useEffect(() => {

        const urlSearchString = window.location.search;
        const params = new URLSearchParams(urlSearchString);
        setIdAluno(params.get('IDALUNO'));

    }, []);

    useEffect(() => {

        axios.get(baseURL).then((response) => {
            //console.log(response.data[0]);
            setItens(response.data);
        });

        //console.log(baseURL)
    }, [IdAluno]);

    switch (props.tipo) {
        case "sobre": return (
            <>
                <section>
                    <div>
                        <h2>{props.titulo}</h2>
                        <p>{props.subtitulo}</p>
                    </div>
                </section>
            </>
        )
        case "filmes": return (
            <>
                <section>
                    <div>

                        <h2>{props.titulo}</h2>
                        <p>{props.subtitulo}</p>
                        <ul class="film-list">
                        {itens.map((itemLista)=>{
                            if(itemLista.link == null)
                            return(<Item imagem={itemLista.imagem} titulo={itemLista.titulo} />)
                        })}

                    

                        </ul>

                    </div>
                </section>
            </>
        )
        case "contatos": return (
            <>
                <section>
                    <div>
                        <h2>{props.titulo}</h2>
                        <p>{props.subtitulo}</p>
                        <ul class="film-list">
                        {itens.map((itemLista)=>{
                            if(itemLista.link != null)
                            return(<ItemLink imagem={itemLista.imagem} titulo={itemLista.titulo} link={itemLista.link} />)
                        })}
                            
                        </ul>

                    </div>
                </section>
            </>
        )
    }




}