import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
import { PrimeTable } from './components/PrimeTable';
import MultipleColumnsDemo from './MultipleColumnDemo';
import BasicFilterDemo from './BasicFilterDemo';


function App() {

  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);


  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User Onex' },
    { rowNumber: 2, rowDescription: 'Water Plant', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One' },
    { rowNumber: 4, rowDescription: 'Make Breakfast', rowAssigned: 'User Three' }
  ]);

  const [products, setProducts] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
]);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    else {
      rowNumber = 1;
    }

    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };

    //setTodos will set a new array, with old list of todos, and add new todos.
    //To do that, 
    //1. destructure the array using ...todos
    //2. add newTodo to the array
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filterd = todos.filter(
      function (value) {
        return value.rowNumber !== deleteTodoRowNumber;
      }
    );
    setTodos(filterd);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todos.
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className='btn btn-primary'
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm &&
            <NewTodoForm addTodo={addTodo} />
          }
        </div>
        <div>
          <PrimeTable products={products}/>
        </div>
        <div>
          <MultipleColumnsDemo/>
        </div>
        <div>
          <BasicFilterDemo/>
        </div>
      </div>
    </div>
  );
}

export default App;
