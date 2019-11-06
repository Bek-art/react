import React from 'react' 
import { withRouter } from 'react-router-dom'

import svg3 from '../svg/user.svg';
import svg4 from '../svg/telephone.svg'


class ContactPage extends React.Component {
    state = {
        name: this.props.data.name,
        phone: this.props.data.phone,
        isEdit: false
    }
    inputName = (e)=>{
        this.setState({
            name: e.target.value
        })
    } 
      
    inputPhone = (e)=>{
        this.setState({
            phone: e.target.value
        })
    }
    
    openEdit = ()=>{
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    editContact = ()=>{
        this.props.editContact(this.state)
        this.clear();
    }
    handleBack = () => {
        this.props.history.push('/')
    }
    clear = ()=>{
        this.setState({
            name:'',
            phone:''
        })
        document.querySelector('.add-inputs').children[0].value='';
        document.querySelector('.add-inputs').children[1].value='';
        this.props.history.push('/');
    }
    render() {
        return(
           
        <div className="contact-infoPage">
            <img className="contact-img" src={svg3} alt='4' width="190" height="250" />
            <button className="call-img">
            <img className="contact-img" src={svg4} alt='5' width="50" height="50" />
            </button>
            {this.state.isEdit ? 
            <div className="add-inputs">
                <input onInput={this.inputName} value={this.state.name} placeholder="Введите имя"/>
                <input onInput={this.inputPhone} value={this.state.phone} placeholder="Введите номер" />

                <div className="add-btns">
                    <button onClick={this.clear} className="goBack-btn">отмена</button>
                    <button onClick={this.editContact} className="add">OK</button>
                </div>
            </div>  
            :
                <>
                <h1>{this.state.name}</h1>
                <p>{this.state.phone}</p>
                </>
            }
            <button onClick={this.openEdit}>Изменить</button>
        </div>
        )
    }
}

export default withRouter(ContactPage);