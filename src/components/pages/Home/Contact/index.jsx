import step from '../../../../img/contact.png';
import './style.css';

export const Contact = ({width}) => {

    return (
        <div className='blue-bg' id='contact'>
            <div className='container contact-flex'>
                <div className='contact-general'>
                    <h2 className='contact-header'>Have a question?</h2>
                    {width > 670 ? <img src={step} alt="step" className='contact-img'/> : null}
                </div>
                <form className='contact-form' action='https://fom.in.ua/echo' method='POST' onSubmit={e => e.preventDefault()}>
                    <div className='contact-form-user'>
                        <label for="name">Your name</label><br/>
                        <input type="text" className='contact-input' name='name' placeholder='Name' /><br/>
                        <label for="email">Your email</label><br/>
                        <input type="email" className='contact-input'name='email' placeholder='Email'/>
                    </div>
                    <div className='contact-form-msg'>
                        <label for="text">Your message</label>
                        <textarea name="text" cols="30" rows="7" className='contact-textarea' placeholder='Message'/>
                        <button type="submit" className='contact-submit'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}