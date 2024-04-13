import './styles.css';

export default function ShoppingCart() {
    return (
        <div className="shopping-cart-container">
            <div className="cart-items-container">
                <h2 className="my-cart">MEU CARRINHO</h2>
                <div className="products-container">
                    <div className="cart-item">
                        <div className="item-image"></div>
                        <div className="item-info">
                            <p className="item-name">Nome do Produto em duas linhas</p>
                            <p className="item-price">R$ 109,90</p>
                        </div>
                        <div className="display-buttons">
                            <input className="product-quantity" type="number" value="1" />
                            <div className="item-quantity">
                                <ul className="increment-buttons">
                                    <li className="decrement-element">
                                        <button className="quantity-modifier-decrement">-</button>
                                    </li>
                                    <li className="increment-element">
                                        <button className="quantity-modifier-increment">+</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                        <button className="remove-item">X</button>
                        </div>
                    </div>
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
                <button className="checkout-button">FINALIZAR</button>
            </div>
        </div>
    );
}


