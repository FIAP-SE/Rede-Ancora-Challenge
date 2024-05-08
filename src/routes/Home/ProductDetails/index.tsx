import { useParams } from 'react-router-dom';
import './styles.css';
import CardProductDetail from "../../../components/CardProductDetail";
import Header from "../../../components/Header";
import data from "../../../../public/data.json";

export default function ProductDetails() {
    const { id } = useParams<string>();
    const productId = id ? parseInt(id) : 0;

    const product = data.produtos.find(product => product.id === productId);

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    const formattedPrice = product.preco.toFixed(2);


    return (
        <>
            <header>
                <Header />
            </header>
            <section className="rda-card-section">
                <CardProductDetail
                    name={product.nome}
                    price={formattedPrice}
                    imagePath={product.imagem}
                    descricao={product.descricao}
                    marca={product.marca}
                    outrasInfos={product.outras_informacoes}
                />
            </section>
        </>
    )
}
