import{ useState, useEffect } from 'react';
import './styles.css';

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

interface FilterTabProps {
    products: Product[];
    setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const FilterTab: React.FC<FilterTabProps> = ({ products, setFilteredProducts }) => {
    const [filter, setFilter] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedMarca, setSelectedMarca] = useState('');
    const [selectedAno, setSelectedAno] = useState('');
    const [categories, setCategories] = useState<string[]>([]);
    const [marcas, setMarcas] = useState<string[]>([]);
    const [anos, setAnos] = useState<string[]>([]);

    useEffect(() => {
        const uniqueCategories = Array.from(new Set(products.map(product => product.categoria || ''))).filter(Boolean);
        setCategories(uniqueCategories);

        const uniqueMarcas = Array.from(new Set(products.map(product => product.marca))).filter(Boolean);
        setMarcas(uniqueMarcas);

        const uniqueAnos = Array.from(new Set(products.map(product => product.ano ?? ''))).filter(Boolean) as string[];
        setAnos(uniqueAnos);
    }, [products]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setFilter(value);
        filterProducts(value, selectedCategory, selectedMarca, selectedAno);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedCategory(value);
        filterProducts(filter, value, selectedMarca, selectedAno);
    };

    const handleMarcaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedMarca(value);
        filterProducts(filter, selectedCategory, value, selectedAno);
    };

    const handleAnoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedAno(value);
        filterProducts(filter, selectedCategory, selectedMarca, value);
    };

    const filterProducts = (nameFilter: string, categoryFilter: string, marcaFilter: string, anoFilter: string) => {
        const filtered = products.filter(product =>
            (product.nome.toLowerCase().includes(nameFilter) || (product.codigo_da_peca ?? '').toLowerCase().includes(nameFilter)) &&
            (categoryFilter === '' || product.categoria === categoryFilter) &&
            (marcaFilter === '' || product.marca === marcaFilter) &&
            (anoFilter === '' || product.ano === anoFilter)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="filter-tab">
            <input
                type="text"
                placeholder="Nome, Código da Peça"
                value={filter}
                onChange={handleFilterChange}
                className="filter-input"
            />
            <select onChange={handleCategoryChange} className="filter-select">
                <option value="">Categoria</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
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
