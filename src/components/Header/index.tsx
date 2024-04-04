import './styles.css';
import logoImg from "../../assets/logo.png";
import subMenuImg from "../../assets/submenu.svg";
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
                <div className='subMenu'>
                    <img src={subMenuImg} alt="subMenu" />
                </div>
            </div>
        </header>
    );
}