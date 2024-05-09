import React, { useState } from 'react';
import ButtonBuy from '../ButtonBuy';
import QuantityModifier from '../ButtonQuantityModifier';
import './styles.css';

type Props = {
    imagePath: string;
    name: string;
    price: string; 
    descricao: string;
    marca: string;
    outrasInfos: string;
}

export default function CardProductDetail({ imagePath, name, price, descricao, marca, outrasInfos }: Props) {
    const [quantity, setQuantity] = useState(1); // Inicia a quantidade como 1, ajuste conforme necessário

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='rda-card-container'>
            <div className='rda-card-left'>
                <img src={imagePath} alt="Product" />
                <h2>{name}</h2>
                <h6><span className='rda-moeda-detail'>R$</span> {price}</h6>
            </div>
            <div className='rda-card-right'>
                <p>Descrição:</p>
                <p>{descricao}</p>
                <p><span>Marca: </span>{marca}</p>
                <p><span>Outras informações: </span>{outrasInfos}</p>
                <div className='rda-qtd-buy'>
                    <QuantityModifier quantity={quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
                    <ButtonBuy />
                </div>
            </div>
        </div>
    );
}
