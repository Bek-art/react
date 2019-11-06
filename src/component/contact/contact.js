import React from 'react'

import './contact.css'

class Contact extends React.Component {
    render() {
        const name = this.props.data.name;
        const phone = this.props.data.phone;
        const deleteNumber = this.props.deleteNumber;
        const handleContactCLick = this.props.handleContactClick;
        return(
            <>
            <li onClick={handleContactCLick} className="contact-item">
                <div className="contact-info">
                    <h2>{name}</h2>
                    <p>{phone}</p>
                </div>
            <button onClick={deleteNumber} className="btn-chng">X</button>
               
            </li>
            </>
        );
    }
}
export default Contact
