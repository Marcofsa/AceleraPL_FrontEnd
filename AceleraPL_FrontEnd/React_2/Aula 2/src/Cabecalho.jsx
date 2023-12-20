import "./App.css"
export default function Cabecalho(props) {
    return (
        <header>
            <div>
                <img src={props.imagem} />
            </div>
        </header>
    )
}