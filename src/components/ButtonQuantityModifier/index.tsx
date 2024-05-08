// QuantityModifier.tsx
import React from 'react';
import './styles.css';

interface QuantityModifierProps {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const QuantityModifier: React.FC<QuantityModifierProps> = ({ quantity, onIncrement, onDecrement }) => {
    return (
        <div className="display-buttons">
            <input className="product-quantity" type="number" value={quantity} readOnly />
            <div className="item-quantity">
                <ul className="increment-buttons">
                    <li className="increment-element">
                        <button className="quantity-modifier-increment" onClick={onIncrement}>+</button>
                    </li>
                    <li className="decrement-element">
                        <button className="quantity-modifier-decrement" onClick={onDecrement}>-</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default QuantityModifier;
