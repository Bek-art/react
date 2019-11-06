import React from 'react'
import { withRouter } from 'react-router-dom'
import Contact from '../contact/contact';


class Contacts extends React.Component {
    handleContactClick = (index) => {
        console.log(index)
        this.props.history.push(`/contact/${index}`)
    }

    render() {
        const data = this.props.data;
        const handleImg = this.props.handleImg;
        const deleteNumber = this.props.deleteNumber;
        const handleContactClick = this.handleContactClick
        return(
            <ul className="contact-list">
                <h2>Ваши контакты</h2>
                    {data.map((item,index) => (
                        <Contact
                        handleImg={(e) => handleImg(index)}
                        handleContactClick={() => handleContactClick(index)}
                        deleteNumber={() => deleteNumber(item.id)}
                        data={item}
                        key={index}
                        />
                    ))}
            </ul>
        );
    }
}
export default withRouter(Contacts);