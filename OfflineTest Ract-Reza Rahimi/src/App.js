//gathering all components(cards) together

import React, { Component } from 'react';

import Exercise from './Exercise'
import Painting from "./Painting";
import Hey from './Hey'
import FunOut from "./FunOut";
import Sports from './Sports'


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            component_num:Math.floor(Math.random() * 5),    //to create random selector of cards

            //initializing default title and description of cards

            exercise_title: "Exercise",
            exercise_description: "Exercise on a regular basis.",

            painting_title: "Painting",
            painting_description: "Look at this beautiful painting",

            funout_title: "Let's have fun",
            funout_description: "Listen to the music",

            hey_title: "Hey!",
            hey_description: "Have you called your parents lately?",

            sports_title: "Sports",
            sports_description: "Have you ever played one of these sports?"
        };

        //binding 'this' among all functions who use it
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChangeTitle(event) { //to change the title based on user input
        let title = event.target.value;

        let num = this.state.component_num;

        //which card's title should i change ?
        if (num === 0){
            this.setState({exercise_title: title})
        }
        else if(num === 1){
            this.setState({painting_title: title})
        }
        else if(num === 2){
            this.setState({funout_title: title})
        }
        else if(num === 3){
            this.setState({hey_title: title})
        }
        else if (num === 4){
            this.setState({sports_title: title})
        }
    }

    handleChangeDescription(event){ //to change the description base on user input
        let description = event.target.value;

        let num = this.state.component_num;

        //which card's description should i change ?
        if (num === 0){
            this.setState({exercise_description: description})
        }
        else if(num === 1){
            this.setState({painting_description: description})
        }
        else if(num === 2){
            this.setState({funout_description: description})
        }
        else if(num === 3){
            this.setState({hey_description: description})
        }
        else if(num === 4){
            this.setState({sports_description: description})
        }

    }


    handleSubmit(event){ //submit the changes

        let a = Math.floor(Math.random() * 5);  //update the on-screen card
        this.setState({component_num: a});
        event.preventDefault();

        this.render()
    }


    render(){

        let num = this.state.component_num;
        let card ='';

        //which card do i have to render ?
        if(num === 0){
            card = <Exercise  title={this.state.exercise_title} description={this.state.exercise_description}/>
        }
        else if (num === 1){
            card = <Painting title={this.state.painting_title} description={this.state.painting_description}/>
        }
        else if (num === 2){
            card = <FunOut title={this.state.funout_title} description={this.state.funout_description}/>
        }
        else if (num === 3){
            card = <Hey title={this.state.hey_title} description={this.state.hey_description}/>
        }
        else if (num === 4){
            card = <Sports title={this.state.sports_title} description={this.state.sports_description}/>
        }

        return(
            <div>
                {card}
                <br/>
                <form className="form-style-4" action="" method="post" onSubmit={this.handleSubmit}>
                    <label >
                        <span>Desired Title</span><input type="text" name="title" onChange={this.handleChangeTitle}/>
                    </label>
                    <label >
                        <span>Desired Description</span><input type="text" name="description" onChange={this.handleChangeDescription}  />
                    </label>

                    <label>
                        <br/>
                        <br/>
                        <span>&nbsp;</span><input type="submit" value="Try" />
                    </label>
                </form>

            </div>

        )
    }
}

export default App;
