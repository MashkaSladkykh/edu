import './style.css';

export const Benefit = ({title, text, src}) => {
    
    return(
        <div className="benefit">
            <img src={src} alt={title}  className="benefit-img"/>
            <div className="benefit-general">
                <h3 className="benefit-title">{title}</h3>
                <p className="benefit-text">{text}</p>
            </div>
        </div>
    )
}