import React from 'react'
import {withRouter} from 'react-router-dom'

import './options.css'



class Options extends React.Component {
    render(){
        return(
            <>
                <button className="btn-btn">Поделиться контактом</button>
                <button className="btn-btn">Отправить геоданные</button>
                <button className="btn-btn">Сохранить на SIM</button>
                <button className="btn-btn">Заблокировать</button>
                <button className="btn-btn">Коллективный звонок</button>
            </>
        )
    }

}

    
    

export default withRouter(Options)