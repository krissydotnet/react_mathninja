import React, {useState} from 'react';



const FlashCard = ({num1, num2, answer, handleChange, operator}) => {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInput = (e) => {
        setInput(e.target.value);

        if((e.keyCode === 32) || (e.keyCode === 13)){
          answer = e.target.value;
          setInput('');
          if (answer !== '') handleChange(parseInt(answer));
        }
      }

    return (
        <div className="flash-card-container">
                <div  id="flash-card">
                    <h1 id="number1">{num1}</h1>
                    <h1 id="operator">{operator}</h1>
                    <h1 id="number2">{num2}</h1>
                    <div id="equals" className="vertical"></div>
                    <form onSubmit={handleSubmit}>
                        <input type="number" value={input}  id="answer" onChange={handleInput} onKeyUp={handleInput}  />
                    </form>
                </div>
        </div>
    );
}

export default FlashCard;