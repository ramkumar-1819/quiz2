import React from 'react';
import './Quiz.css';
import questions from '../Questions/Question.json';


var initial_value=0;
class Quiz extends React.Component{
    constructor(){
        super();
        this.state={details:questions[initial_value]}
    }
    next=()=>{
        initial_value+=1
        this.setState({details:questions[initial_value]})
    }
    previous=()=>{
        initial_value-=1
        this.setState({details:questions[initial_value]})
    }
    quit=()=>{
        document.getElementById("container").style.display="none"
    }
    render(){
        console.log(questions)
    return(<div id="container" className="contain">

           <div className="question-section">
                <div>Question</div>
                <pre><span>  {initial_value+1} of 15</span><span className="question">{this.state.details.question}</span></pre>
            </div>

            <div className="answer-section">
                <button>{this.state.details.optionA}</button>
                <button>{this.state.details.optionB}</button>
                <button>{this.state.details.optionC}</button>
                <button>{this.state.details.optionD}</button>
            </div>

            <div className="buttons-section">
                <button onClick={this.previous}>Previous</button>
                <button onClick={this.next}>Next</button>
                <button onClick={this.quit}>Quit</button>
            </div>
         </div>
         )
    }
}
export default Quiz