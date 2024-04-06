import './styles.css';

type Props = {
    children: string;
}

export default function SearchButton({children}: Props) {

    return (
        <div className='center'>
            <button className='buttonstyle'> {children} </button>
        </div>
    );
}