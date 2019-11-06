import React from 'react'
import { withRouter } from 'react-router-dom'

import './AddContact.css'

class AddContact extends React.Component{
    state = {
        name:'',
        phone: ''
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
    addNewContact = ()=>{
        this.props.addNewContact(this.state)
        this.clear()
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
    render(){
        return(
            <div className="add-form">
                <div className="add-inputs">
                    <input onInput={this.inputName} placeholder="введите имя"/>
                    <input onInput={this.inputPhone} placeholder="введите номер"/>
                </div>
                <div className="add-btns">
                    <button onClick={this.clear} className="goBack-btn">отмена</button>
                    <button onClick={this.addNewContact} className="add">OK</button>
                </div>
            </div>
        )
    }
}

export default withRouter(AddContact);