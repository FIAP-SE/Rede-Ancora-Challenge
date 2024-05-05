import './styles.css';
import logoImg from "../../../public/assets/logo.png";
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <div className="rda-header">
                <div className='logo'>
                    <Link to={"/"}>
                        <img src={logoImg} alt="logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
}