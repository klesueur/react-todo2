import React from 'react';
import TodoItem from './TodoItem';


const List = ({ todoList }) => {

    return (
        <div className="List">
            {todoList.map(item => {
                return <TodoItem key={item.id} todo={item} />
            })}
        </div>
    )
};

export default List;