import React  from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom'
import axios from 'axios'

import Contacts from '../contact/contacts';
import ContactPage from '../contact/contactPage'
import AddContact from '../AddContact/AddContact';
import Header from '../Header/Header'
import Options from '../options/options';

class Book extends React.Component {
    state = {
        data:[{
            name: "",   
            phone: ""
        }],
        nameInputVal:'',
        phoneInputVal:''
        
    }
  
    componentDidMount(){
        this.fetchData();

    }
    handleImg = event => {
        this.setState({
            imgVal: event.target.value
        })
    }
    addMenu = () => {}
    addNewContact = async(contact)=>{
        const data = [...this.state.data];
        contact.id = data[data.length-1].id + 1;
        const response = await axios.post(`http://localhost:3000/contact`, contact)
        if(response.statusText==="Created"){
            this.fetchData()
        }
    }
    fetchData = async () => {
        const response = await axios.get('http://localhost:3000/contact')
        this.setState({data: response.data})
    }
   
    deleteNumber = async (id) => {
        let response = await axios.delete(`http://localhost:3000/contact/${id}`);
        if(response.statusText==="OK") this.fetchData()
    }
    editContact = async(id, obj)=>{
        const response = await axios.put(`http://localhost:3000/contact/${id}`, obj);
        if(response.statusText==="OK") this.fetchData()
    }
    render() {
        return (
            <Router>
                <Route exact path='/add-new-contact'>
                    <Header title="Add new contact"/>
                    <AddContact addNewContact={this.addNewContact}/>
                </Route>
                <Route exact path="/options">
                    <Header title="Options"/>
                    <Options/>
                </Route>
                <Route exact path="/">
                    <Header title="Contact book"/>
                    <Contacts
                        handleContactClick={this.handleContactClick}
                        handleClick={this.handleClick}
                        handleImg={this.handleImg}
                        deleteNumber={this.deleteNumber}
                        data={this.state.data}/>
                </Route>
                {this.state.data.map((item,index)=>(
                    <Route
                    key={index} 
                    exact
                    path={`/contact/${index}`}>
                            <Header title="Info"/>
                            <ContactPage 
                            editContact = {(obj)=>{this.editContact(item.id, obj)}}
                                data={item}
                            />
                    </Route>
                ))}
            </Router>
        );
    };
};
export default Book;