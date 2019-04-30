import React, { Component } from 'react';
import './App.css';
import FlashCard from './FlashCard';
import Belt from './Belt';
import Level from './Level';
import Score from './Score';
import Banner from './Banner';
import {BELTS, LEVEL, dojo } from './data';


const BELT_SIZE = 15;



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
    displayNewBelt: false
  }
  

  render() {
    
    const checkAnswer = (answer) => {
 
      if ((answer!=="") && (correctAnswer(answer))) {
        this.setState(prevState => {
            let currentBelt = prevState.belt;
            let currentLevel = prevState.level;
            let currentWrong = prevState.wrong;
            let NewBelt = false;
            let NewLevel = false;
             //Reset score to zero when complete level
            let currentScore = (prevState.score ===  BELT_SIZE) ? 0: prevState.score + 1;

            if (currentScore === 0) {
              // If score reset then go to next belt level
              currentWrong = 0;
              currentBelt++;
              NewBelt = true;
            
              if (currentBelt === BELTS.length) {
                //If completed all belts go to next level
                currentBelt = 0;
                currentLevel++;
                NewLevel++;
              }
            }
        

          return {score: currentScore,
                  level: currentLevel,
                  belt: currentBelt,
                  wrong: currentWrong,
                  displayNewBelt: NewBelt,
                  displayNewLevel: NewLevel,
                  correct: true                 //change state to correct = true
          }
       });
      } else {
          this.setState(prevState => {
            //When wrong answer decrement score if score > 0
            let currentScore = (prevState.score > 0)? prevState.score - 1: prevState.score;
            //Increment wrong
            let currentWrong = prevState.wrong + 1;
            return {
              score: currentScore,
              wrong: currentWrong,
              displayNewBelt: false,
              displayNewLevel: false,
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
            {!this.state.displayNewBelt || <Banner id="new-belt" />}
            {!this.state.displayNewLevel || <Banner id="new-level"/>}
        </main>
      </div>
    );
  }


}

export default App;
