import { useState, useCallback } from 'react';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';
import TodoItem from '../TodoItem/TodoItem';
import TodoItemForm from '../TodoItemForm/TodoItemForm';
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
  
  const [list, changeList] = useState([
    {id: '001', status: 'new', name: "learn HTML"},
    {id: '002', status: 'new', name: "learn CSS"},
    {id: '003', status: 'new', name: "learn JavaScript"},
    {id: '004', status: 'new', name: "learn React"},
  ]);
  const [formIsVisible, changeFormVisibility] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  function handleChangeStatus (someStatus) {
    if (someStatus === 'new') {
      return 'progress';
    } else if (someStatus === 'progress') {
      return 'done';
    } else if (someStatus === 'done') {
      return 'new';
    }
  };

  const changeStatus = useCallback((id, status, name) => {
    changeList((prevState) =>  {
      console.log('prevState', prevState);
      const newState = prevState.map((item) => {
        if (item.name === name) {
          return {
            id: id,
            status: handleChangeStatus(status),
            name: name,
          };
        }
        return item;
      });
      console.log('newState', newState);
      return newState;
    });
  }, []);



  const handleCreateTodo = useCallback(() => {
    changeFormVisibility(true);
  }, []);

  const generateID = useCallback(() => {
    return ( Math.random().toString(36).substr(2,7));
  }, []);

  const addNewItemTodo = useCallback((id, status, name) => {
    changeList((prevState) => {
      const newState = prevState.concat([{ id: generateID(), status, name}]);
      console.log('newItem', newState);
      return newState;
    });
    changeFormVisibility(false);
  }, []);

  const updateItem = useCallback((updateItemID, updateItemStatus, updateItemName ) => {
    changeList((prevState) => {
      const newState = prevState.map((item) => {
        if (item.id === updateItemID) {
          return {
            id: item.id, 
            status: updateItemStatus, 
            name: updateItemName,        
          };
        } else {
          return item;
        }
      });
      console.log('newState', newState)
      return newState;
    });
    setEditItemId(false);
  }, []);

  const changeItemByID = useCallback((id) => {
    const showItemForEdit = list.find((item) => {
      return (item.id === id);
    });
    setEditItemId(showItemForEdit);
  }, [list]);



  const deleteItemByID = useCallback((id) => {
    changeList((prevState) => {
      const newState = prevState.filter((todoItem) => {
        return todoItem.id !== id;   
      });
      return newState;
    });
  }, []);

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

      <h3>A study progress</h3>
      {list.map((todoItem) => {
        return (
        <TodoItem 
            key={todoItem.id} 
            id={todoItem.id}
            status={todoItem.status}
            name={todoItem.name} 
            onChange = {changeStatus} 
            onEdit = {changeItemByID}
            onDelete = {deleteItemByID}
        />
        );
      })}
      <div>
        <button className="addItemBtn" onClick={handleCreateTodo}>
          Add item
        </button>
         {formIsVisible ? (
         <TodoItemForm 
          onSave={addNewItemTodo} />) : null}
         {editItemId ? (
         <TodoItemForm 
            id={editItemId.id}
            status={editItemId.status}
            name={editItemId.name}
            onSave={updateItem} />) : null}
      </div>
     
      <button onClick={addYear}>
          Increase year
      </button>

      <Footer year={startYear} />
    </div>
  );
}

export default App;


