import { useState, useEffect } from 'react';
import './styles.css';

interface Product {
    id: number;
    nome: string;
    preco: number;
    marca: string;
    imagem: string;
    linha?: string;
    ano?: string;
    codigo_da_peca?: string;
}

interface FilterTabProps {
    products: Product[];
    setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const FilterTab: React.FC<FilterTabProps> = ({ products, setFilteredProducts }) => {
    const [codigoPecaFilter, setCodigoPecaFilter] = useState('');
    const [placaCarroFilter, setPlacaCarroFilter] = useState('');
    const [selectedLinha, setSelectedLinha] = useState('');
    const [selectedMarca, setSelectedMarca] = useState('');
    const [selectedAno, setSelectedAno] = useState('');
    const [linhas, setLinhas] = useState<string[]>([]);
    const [marcas, setMarcas] = useState<string[]>([]);
    const [anos, setAnos] = useState<string[]>([]);

    useEffect(() => {
        const uniqueLinhas = Array.from(new Set(products.map(product => product.linha || ''))).filter(Boolean);
        setLinhas(uniqueLinhas);

        const uniqueMarcas = Array.from(new Set(products.map(product => product.marca))).filter(Boolean);
        setMarcas(uniqueMarcas);

        const uniqueAnos = Array.from(new Set(products.map(product => product.ano ?? ''))).filter(Boolean) as string[];
        setAnos(uniqueAnos);
    }, [products]);

    const handleCodigoPecaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setCodigoPecaFilter(value);
        filterProducts(value, placaCarroFilter, selectedLinha, selectedMarca, selectedAno);
    };

    const handlePlacaCarroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setPlacaCarroFilter(value);
        filterProducts(codigoPecaFilter, value, selectedLinha, selectedMarca, selectedAno);
    };

    const handleLinhaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedLinha(value);
        filterProducts(codigoPecaFilter, placaCarroFilter, value, selectedMarca, selectedAno);
    };

    const handleMarcaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedMarca(value);
        filterProducts(codigoPecaFilter, placaCarroFilter, selectedLinha, value, selectedAno);
    };

    const handleAnoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedAno(value);
        filterProducts(codigoPecaFilter, placaCarroFilter, selectedLinha, selectedMarca, value);
    };

    const filterProducts = (codigoPecaFilter: string, placaCarroFilter: string, linhaFilter: string, marcaFilter: string, anoFilter: string) => {
        const filtered = products.filter(product =>
            (product.codigo_da_peca ?? '').toLowerCase().includes(codigoPecaFilter) &&
            (product.nome.toLowerCase().includes(placaCarroFilter)) &&
            (linhaFilter === '' || product.linha === linhaFilter) &&
            (marcaFilter === '' || product.marca === marcaFilter) &&
            (anoFilter === '' || product.ano === anoFilter)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="filter-tab container">
            <input
                type="text"
                placeholder="Código da Peça"
                value={codigoPecaFilter}
                onChange={handleCodigoPecaChange}
                className="filter-input"
            />
            <input
                type="text"
                placeholder="Placa do Carro"
                value={placaCarroFilter}
                onChange={handlePlacaCarroChange}
                className="filter-input"
            />
            <select onChange={handleLinhaChange} className="filter-select">
                <option value="">Linha do Carro</option>
                {linhas.map(linha => (
                    <option key={linha} value={linha}>{linha}</option>
                ))}
            </select>
            <select onChange={handleMarcaChange} className="filter-select">
                <option value="">Marca</option>
                {marcas.map(marca => (
                    <option key={marca} value={marca}>{marca}</option>
                ))}
            </select>
            <select onChange={handleAnoChange} className="filter-select">
                <option value="">Ano</option>
                {anos.map(ano => (
                    <option key={ano} value={ano}>{ano}</option>
                ))}
            </select>
        </div>
    );
}

export default FilterTab;
