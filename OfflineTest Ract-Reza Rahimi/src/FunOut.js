//remember every card is a component
import React from 'react';
import sound from './sound.mp3'
import './Styles.css'

class FunOut extends React.Component{
    constructor(props){
        super(props);
        this.state={
            code: 2,
            title: props.title,
            description: props.description,
            tag: 'fun'
        }
    }

    render(){
        let title = this.state.title;
        let description = this.state.description;
        return(
            <div className="card">
                <audio controls className='audio'> <source src={sound} type='audio/mpeg'/></audio>
                <div className="container">
                    <h4><b>{title}</b></h4>
                    <p>{description}</p>
                </div>
            </div>

        )
    }
}

export default FunOut