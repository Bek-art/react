import React from 'react'
import { withRouter } from 'react-router-dom'

import plusSvg from '../svg/4.svg'
import optionsSvg from '../svg/2.svg'
import svg2 from '../svg/previous.svg';

import './Header.css'

class Header extends React.Component{
    openAddContact = ()=>{
        this.props.history.push('/add-new-contact')
    }
    goHome = ()=>{
        this.props.history.push('/')
    }
    openOptions = ()=>{
        this.props.history.push('/options')
    }
    render(){
        return(
            
            <div className="header">
                <h1>{this.props.title}</h1>

                <div className="header-btns">
                    <div className="header-left">
                        <button onClick={this.goHome} className="btn-back">
                            <img src={svg2} alt='3' width="100" height="45" />
                        </button>
                    </div>
                    <div className="header-right">
                        <button onClick={this.openAddContact} className="add-btn">
                            <img alt="plus" src={plusSvg}/>
                        </button>
                        
                        <button onClick={this.openOptions} className="optns-btn">
                            <img alt="options" src={optionsSvg}/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};
       
export default withRouter(Header);