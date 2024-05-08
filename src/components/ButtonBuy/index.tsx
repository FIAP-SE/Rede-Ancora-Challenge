import './styles.css';
import { Link } from 'react-router-dom';

export default function ButtonBuy() {

    return (
            <div className='rda-button-buy'>
                <Link to="/mycart">
                <h5>COMPRAR</h5>
                </Link>
            </div>
    );
}