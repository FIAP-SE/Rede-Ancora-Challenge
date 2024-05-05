import './styles.css';

type Props = {
    name: string;
    price: string;
    imagePath: string; 
}

export default function ProductCard({name, price, imagePath}: Props) {
    return (
        <div className='rda-cardProduct'>
            <div className='rda-imageCard'>
                <img src={imagePath} alt="Product" />
            </div>
            <div className='rda-infosCard'>
                <p>{name}</p>
                <h6><span className='rda-moeda'>R$</span> {price}</h6>
            </div>
        </div>
    );
}
