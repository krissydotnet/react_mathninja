import React, { Component } from 'react';
import './App.css';
import FlashCard from './FlashCard';
import Belt from './Belt';
import Level from './Level';
import Score from './Score';
import Banner from './Banner';

const LEVEL_SIZE = 15;


class App extends Component {
  state = {
    num1: 1,
    num2: 1,
    operator: "+",
    score: 0,
    wrong: 0,
    level: 0,
    user: 'Default',
    belt: 0,
    correct: false,
    bannerId: "",
    displayBanner: false
  }
  

  render() {

    const checkAnswer = (answer) => {
 
      if ((answer!=="") && (correctAnswer(answer))) {
        this.setState(prevState => {
            //Reset level to zero when complete level
            let currentLevel = (prevState.level === LEVEL_SIZE) ? 0: prevState.level + 1;
            let currentdisplayBanner = (prevState.level === LEVEL_SIZE)? true: false;
            //Go to next belt when complete level
            let currentBelt = (prevState.level === LEVEL_SIZE)? prevState.belt + 1 : prevState.belt;
            //Increment score if level hasn't been reset
            let currentScore = (currentLevel === 0)? 0 : prevState.score + 1;
            
            //Reset wrong if level has been reset
            let currentWrong = (currentLevel === 0)? 0 : prevState.wrong;
          return {score: currentScore,
                  level: currentLevel,
                  belt: currentBelt,
                  wrong: currentWrong,
                  displayBanner: currentdisplayBanner,
                  correct: true                 //change state to correct = true
          }
       });
      } else {
          this.setState(prevState => {
            //When wrong answer decrement score if score > 0
            let currentScore = (prevState.score > 0)? prevState.score - 1: prevState.score;
            //When wrong answer decrement leve if level > 0
            let currentLevel = (prevState.level > 0)? prevState.level - 1: prevState.level;
            //Increment wrong
            let currentWrong = prevState + 1;
            return {
              score: currentScore,
              level: currentLevel,
              wrong: currentWrong,
              correct: false                  // change state to correct = false
            }
          })
      }
    }


    const correctAnswer = (answer) => {
      
      switch (this.state.operator) {
        case "+":  
            return ((this.state.num1 + this.state.num2) === answer);
        case "-":
            return ((this.state.num1 - this.state.num2) === answer);
        case "x":
            return ((this.state.num1 * this.state.num2) === answer);
        case "/":
            return ((this.state.num1 / this.state.num2) === answer);
        default:
            return false;
      }

    };

    return (
      <div className="App">
        <header>
            <div className="header-left">
              <img src="./images/cute-ninja-clipart-1.jpg" alt="Ninja" /><h1>Math Ninja</h1>
              </div>
            <div className="header-right">
              <Level level={this.state.level} />
              <Belt beltLevel={this.state.belt}/>
            </div>
        </header>
        <main id="main-container">
            <FlashCard num1={this.state.num1} num2={this.state.num2} handleChange={checkAnswer} operator={this.state.operator} />
            <Score correct={this.state.correct} score={this.state.score} wrong={this.state.wrong}  />
            {this.state.displayBanner}
        </main>
      </div>
    );
  }


}

export default App;
