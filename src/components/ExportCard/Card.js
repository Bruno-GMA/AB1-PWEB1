import "./card.css";
function Card({imagem, titulo, descricao}) {
    return(
        <div className="card">
            <img src={imagem} alt={titulo}/>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>

    )
}
export default Card;