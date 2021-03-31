import { useState, useCallback } from 'react';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';
import TodoItem from '../TodoItem/TodoItem';
import Footer from '../Footer/Footer';
import './App.css';
import React from 'react';

function App() {
  const [userName, newName] = useState('Peter');
  const handleClick = useCallback(() =>  {
    if (userName === 'Peter') {
      newName('John');
    } else if (userName === 'John') {
      newName('Peter');
    }
  }, [userName]);

  const [startNumber, nextNumber] = useState('0');
  const incrementCount = () => nextNumber(+startNumber+1);
  const decrementCount = () => {
    if (startNumber > 0) {
      nextNumber(startNumber-1);
    } 
  };

  const [startYear, nextYear] = useState('2021');
  const addYear = useCallback ( () => {
    nextYear(+startYear+1);
  }, [startYear]);


  return (
    <div className="App">
      <Header name={userName} />
      <h1>Hello, {userName}!</h1>
      <button onClick={handleClick} >
        Say Hello to user
      </button>
      <br />

      <div className="counter-container">
        <h2>Counter:</h2>
        <button className="counter-btns" onClick={decrementCount}>-</button>
        <Counter number={startNumber}/>
        <button className="counter-btns" onClick={incrementCount}>+</button>
      </div>

      <h3>Choose the STATUS of a study progress</h3>
      <TodoItem name='learn HTML'/>
      <TodoItem name='learn CSS'/>
      <TodoItem name='learn JavaScript'/>
      <TodoItem name='learn React'/>

      <button onClick={addYear}>
          Increase year
      </button>

      <Footer year={startYear} />
    </div>
  );
}

export default App;


