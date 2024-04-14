import { useNavigate } from "react-router-dom";
import './styles.css';

type Props = {
    children: string;
}

export default function SearchButton({children}: Props) 

    {const navigate = useNavigate();
  
    const handleNavigate = (destination: string) => {
      navigate(destination);
    };

    return (
        <div className='center' onClick={() => handleNavigate("/mycart")}>
            <button className='buttonstyle' > {children} </button>
        </div>
    );
}