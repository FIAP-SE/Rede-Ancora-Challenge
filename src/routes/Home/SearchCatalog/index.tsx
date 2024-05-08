import './styles.css';
import Header from "../../../components/Header";
import ProductCard from "../../../components/ProductCard";
import FilterTab from "../../../components/FilterTab";
import data from "../../../../public/data.json";
import { useState } from 'react';
import { Link } from 'react-router-dom';


interface Product {
    id: number;
    nome: string;
    preco: number;
    marca: string;
    imagem: string;
    categoria?: string;
    ano?: string;
    codigo_da_peca?: string;
}

export default function SearchCatalog() {
    const [products] = useState<Product[]>(data.produtos);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(data.produtos);

    return (
        <>
            <header>
                <Header />
            </header>
            <section>
                <div className="filter-tab-container-wrapper">
                    <FilterTab products={products} setFilteredProducts={setFilteredProducts} />
                </div>
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id}>
                            <Link to={`/productdetail/${product.id}`}>
                                <ProductCard
                                    name={product.nome}
                                    price={product.preco.toFixed(2)}
                                    imagePath={product.imagem}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
