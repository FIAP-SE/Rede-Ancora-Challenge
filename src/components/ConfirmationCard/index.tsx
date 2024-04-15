import { useState, useEffect } from 'react';
import './styles.css';

export default function OrderConfirmed() {
    const [orderNumber, setOrderNumber] = useState('');

    const generateOrderNumber = () => {
        const number = Math.floor(Math.random() * (1000 - 100000 + 1)) + 100000;
        return number.toString();
    };

    useEffect(() => {
        setOrderNumber(generateOrderNumber());
    }, []);

    return (
        <div className="confirmation-card-container">
            <div className="confirmation-content">
                <h1 className="confirmation-title">PEDIDO CONFIRMADO!</h1>
                <span className="order-number">{orderNumber}</span>
                    <div className="instructions">Vá até o caixa para finalizar</div>
                    <div className="instructions">seu pagamento e retirar</div>
                    <div className="instructions">sua compra.</div>
            </div>
        </div>
    );
}
