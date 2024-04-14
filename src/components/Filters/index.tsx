import './styles.css';

type Props = {
  label: string
}

export default function Filter ({label }: Props) {

    return (
        <div className='center'>
          <div className='container'>
            <input className='search' type="text" placeholder={label}/>
            <input className='check' type='checkbox' />
            </div>
        </div>
    );
}