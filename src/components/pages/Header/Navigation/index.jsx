import { Link } from 'react-router-dom';
import './style.css';

export const Navigation = ({open=false}) => {

    return (
        <nav className={open ? 'nav-list open': 'nav-list'}>
            <Link to={'/'}><li className='nav-list-item'>Home</li></Link>
            <Link to={'/courses'}><li className='nav-list-item'>Courses</li></Link>
            <a href='#about'><li className='nav-list-item'>About us</li></a>
            <a href='#contact'><li className='nav-list-item'>Contact us</li></a>
        </nav>
    )
}