import React from 'react';


const TodoItem = ({ todo }) => {
    return (
        <div className="TodoItem">
            {console.log('todo prop object', todo)}
            <input type="checkbox" />
            <p> {todo.task} </p>
            <button> X </button>
        </div>
    )
};

export default TodoItem;