import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 


const Form = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleTaskInput = (e) => {
        setTodo({ ...todo, task: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() })
        }
        setTodo({ ...todo, task: "" })
    }

    return(
        <form>
            {console.log('e.target.value setTodo', todo)}
            <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInput} />
            <button type="submit" onClick={handleSubmit} />
        </form>
    )
};

export default Form;