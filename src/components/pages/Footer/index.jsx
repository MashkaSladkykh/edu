import './style.css';
import {Navigation} from '../Header/Navigation';

export const Footer = () => {
    return(
        <footer className="blue-bg">
            <div className="container footer">
                <div className='footer-active'>
                    <Navigation/>
                    <div className='footer-media'>
                        <a href="#" className='footer-fb'></a>
                        <a href="#" className='footer-inst'></a>
                        <a href="#" className='footer-yt'></a>
                        <a href="#" className='footer-twi'></a>
                    </div>
                </div>
                <div className='footer-rights'>Copyright 2023 <span>Learntogether</span>, Inc. Terms & Privacy</div>
            </div>
        </footer>
    )
}