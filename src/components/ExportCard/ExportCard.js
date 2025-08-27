import Card from './Card';
import './exportcard.css';

import foto1 from "../../assets/Eventos.webp";
import foto2 from "../../assets/espaço1.jpg";
import foto3 from "../../assets/espaço2.jpg";


const cardsData = [
  {
    imagem: foto1,
    titulo: 'Sunset Club',
    descricao: 'Um espaço sofisticado com vistas privilegiadas para o pôr do sol. Ideal para casamentos ao ar livre, onde cada celebração é embalada pelas cores douradas do entardecer, criando um cenário romântico e inesquecível.'
  },
  {
    imagem: foto2,
    titulo: 'Villa Encanto',
    descricao: 'Uma charmosa villa inspirada em ambientes europeus, que une elegância e aconchego. Com jardins bem cuidados e arquitetura encantadora, é o local perfeito para transformar o “sim” em um momento mágico e exclusivo.'
  },
  {
    imagem: foto3,
    titulo: 'Campos de Luar',
    descricao: 'Um refúgio romântico em meio à natureza, iluminado pela beleza da lua e do céu estrelado. Cercado por amplos campos verdes, oferece o cenário ideal para casamentos que unem simplicidade, charme e atmosfera poética.'
  }
];

function ExportCard() {
  return (
    <div className='export-container'>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imagem={card.imagem}
          titulo={card.titulo}
          descricao={card.descricao}
        />
      ))}
    </div>
  );
}

export default ExportCard;