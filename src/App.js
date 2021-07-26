import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([ todo, ...todoList ])
  };

  return (
    <div className="App">
      {console.log('todoList', todoList)}
      <header className="App-header">
        react todo
      </header>
      <Form addTodo={addTodo} />
      <List todoList={todoList} />
    </div>
  );
}

export default App;
