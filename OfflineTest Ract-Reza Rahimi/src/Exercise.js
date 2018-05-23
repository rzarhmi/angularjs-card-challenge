//remember every card is a component
import React from 'react';
import logo from './giphy.gif'
import './Styles.css'

class Exercise extends React.Component{
    constructor(props){
        super(props);
        this.state={
            code: 1,
            title: props.title,
            description: props.description,
            tag: 'sport'
        }
    }

    render(){
        let title = this.state.title;
        let description = this.state.description;
        return(
            <div className="card">
                <img src={logo} alt="logo" className="img"/>
                    <div className="container">
                        <h4><b>{title}</b></h4>
                        <p>{description}</p>
                    </div>
            </div>

    )
    }
}

export default Exercise