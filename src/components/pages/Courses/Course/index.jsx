import './style.css';

export const Course = ({course}) => {
    return(
        <li className='course'>
            <img src={course.img} alt={course.name} className='course-img' />
            <div className='course-info'>
                <p className='course-info-wrap'>     
                    <span className='course-lvl'>{course.level}</span>
                    <span className='course-date'>{course.date}</span>
                </p>
                <h3 className='course-title'>{course.name}</h3>
                <p className='course-teacher'>{course.teacher}</p>
            </div>
        </li>
    )
};