import { CiLocationOn } from "react-icons/ci";

import "./card.css";

export default function Card({imagem, titulo, descricao, cidade}) {

    const IconeLocalizacao = () => <span><CiLocationOn /></span>;


    return(
        <div className="card">
            <img src={imagem} alt={titulo}/>
            <h3>{titulo}</h3>
            <p className='descricao'>{descricao}</p>
            <p className='cidade'>
                {cidade && <IconeLocalizacao />} {cidade}
            </p>
        </div>

    )
}