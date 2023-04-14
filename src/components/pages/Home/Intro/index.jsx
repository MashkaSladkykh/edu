import './style.css';
import intro from '../../../../img/intro.png'
import { Link } from 'react-router-dom';
export const Intro = ({width}) => {
    return(
        <div className="container intro">
            <div className='intro-general'>
                <h1 className='intro-header'>Learn together</h1>
                <p className='intro-text'>LearnTogether is an exceptional online school that provides students with a comprehensive and flexible learning experience.</p>
                <p className='intro-text'>With a focus on personalized learning, students can receive customized lesson plans and one-on-one support from experienced educators.</p>
                {width > 415 ? <p className='intro-text'>This personalized approach ensures that students can learn at their own pace, and receive targeted support to help them achieve their academic goals.</p>: null}
                <Link to={'/courses'}><button type='button' className='intro-btn'>Explore Courses</button></Link>
            </div>
            {width > 670 ? <img src={intro} alt="intro" className='intro-img'/> : null}
        </div>
    )
}