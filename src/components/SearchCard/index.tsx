import InputSearch from '../InputSearch';
import SearchButton from '../SearchButton';
import './styles.css';

type Props = {
    title: string;
    description: string;
    label: string;
    children: string;
}

export default function SearchCard({title, description, label, children}: Props) {

    return (
            <div className='rda-searchcard'>
                <div className='rda-searchcard-header'>
                    <h3>{title}</h3>
                </div>
                <div className='rda-searchcard-content'>
                    <p>{description}</p>
                </div>
                <InputSearch label={label} />
                <SearchButton children={children}/>
            </div>
    );
}