import { Benefit } from "./Benefit";
import { data } from "./data";
import './style.css';

export const Benefits = () => {
    



    return(
        <div className="container benefits" id="about">
            <h2 className="benefits-title">Benefits of studying at the <span className="benefits-title_upper">Learntogether</span></h2>
            <div className="benefits-list">
                {data.map(({id, title, text, src})=><Benefit title={title} text={text} src={src} key={id}/>)}
            </div>
        </div>
    )
}