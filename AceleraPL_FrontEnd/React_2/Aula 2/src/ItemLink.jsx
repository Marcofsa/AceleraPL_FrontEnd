export default function ItemLink(props){
    return(
        <>
            <li><a href={props.link} target="_blank"> <img src={props.imagem} alt={props.titulo} title={props.titulo}/></a></li>
        </>
    )
}