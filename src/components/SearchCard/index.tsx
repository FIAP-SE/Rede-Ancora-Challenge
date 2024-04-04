import InputSearch from '../InputSearch';
import SearchButton from '../SearchButton';
import './styles.css';

type Props = {
    title: string;
    description: string;
}

export default function SearchCard({title, description}: Props) {

    return (
            <div className='rda-searchcard'>
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <InputSearch label='aaaaaa'/>
                <SearchButton/>
            </div>
    );
}