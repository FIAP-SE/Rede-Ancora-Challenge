import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function ShoppingCart() {

/*SIMULAÇÃO DE PRODUTOS*/
const [products, setProducts] = useState([
        { id: 1, name: "Nome do Produto em duas linhas", price: "R$ 109,90", quantity: 1 },
        { id: 2, name: "Nome do Produto em duas", price: "R$ 109,90", quantity: 1 },
        { id: 3, name: "Nome do Produto em duas", price: "R$ 109,90", quantity: 1 },
        { id: 5, name: "Nome do Produto em duas", price: "R$ 109,90", quantity: 1 },
        { id: 6, name: "Nome do Produto em duas", price: "R$ 109,90", quantity: 1 },
        { id: 7, name: "Nome do Produto em duas", price: "R$ 109,90", quantity: 1 },
    ]);
    const navigate = useNavigate();

    const increment = (productId: number) => {
        const newProducts = products.map(product => {
            if (product.id === productId) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });
        setProducts(newProducts);
    };

    const decrement = (productId: number) => {
        const newProducts = products.map(product => {
            if (product.id === productId && product.quantity > 1) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });
        setProducts(newProducts);
    };

    const removeProduct = (productId: number) => {
        const newProducts = products.filter(product => product.id !== productId);
        setProducts(newProducts);
    };

    const finalizeOrder = () => {
        navigate('/OrderConfirmed');
    };

    return (
        <div className="shopping-cart-container">
            <div className="cart-items-container">
                <h2 className="my-cart">MEU CARRINHO</h2>
                <div className="products-container">
                    {products.map((product) => (
                        <div key={product.id} className="cart-item">
                            <div className="item-image"></div>
                            <div className="item-info">
                                <p className="item-name">{product.name}</p>
                                <p className="item-price">{product.price}</p>
                            </div>
                            <div className="display-buttons">
                                <input className="product-quantity" type="number" value={product.quantity} readOnly />
                                <div className="item-quantity">
                                    <ul className="increment-buttons">
                                        <li className="decrement-element">
                                            <button className="quantity-modifier-decrement" onClick={() => decrement(product.id)}>-</button>
                                        </li>
                                        <li className="increment-element">
                                            <button className="quantity-modifier-increment" onClick={() => increment(product.id)}>+</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="remove-item" onClick={() => removeProduct(product.id)}>X</button>
                        </div>
                    ))}
                </div>
                <div className="vertical-line"></div>
            </div>
            <div className="customer-details-container">
                <div className="customer-info">
                    <h2 className="customer-data">DADOS DO CLIENTE</h2>
                    <input className="input-style" type="text" placeholder="Nome" />
                    <input className="input-style" type="email" placeholder="Email" />
                    <input className="input-style" type="tel" placeholder="Telefone" />
                </div>
                <button className="checkout-button" onClick={finalizeOrder}>FINALIZAR</button>
            </div>
        </div>
    );
}
