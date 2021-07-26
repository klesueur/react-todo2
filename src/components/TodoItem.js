import React from 'react';


const TodoItem = ({ todo }) => {
    return (
        <div>
            {console.log('todo prop object', todo)}
            <p> {todo.task} </p>
        </div>
    )
};

export default TodoItem;