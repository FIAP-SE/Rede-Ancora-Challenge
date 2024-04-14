import Filter from '../Filters';
import SearchButton from '../SearchButton';
import './styles.css';

type Props = {
    title: string;
    description: string;
    label: string;
    children: string;
}

export default function SearchFilter({title, description, children}: Props) {

    return (
            <div className='rda-searchcard'>
                <div className='rda-searchcard-header'>
                    <h3>{title}</h3>
                </div>
                <div className='rda-searchcard-content'>
                    <p>{description}</p>
                </div>

                <Filter label='Filtro 1'/>
                <Filter label='Filtro 2'/>
                <Filter label='Filtro 3'/>
                <Filter label='Filtro 4'/>                
                
                <SearchButton children={children}/>
            </div>
    );
}