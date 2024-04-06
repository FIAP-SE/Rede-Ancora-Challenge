import './styles.css';

type Props = {
    label: string;
}

export default function InputSearch({label }: Props) {

    return (
        <div className='center'>
            <input className='search' type="text" placeholder={label}/>
        </div>
    );
}