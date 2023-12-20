export default function Item(props){
    return(
        <>
            <li><img src={props.imagem} alt={props.titulo} title={props.titulo}/></li>
        </>
    )
}