import React from 'react'

// 1. Bracket ke andar 'props' likhna bahut zaruri hai
export const TodoItem = (props) => {
    return (
        <>
        <div>
            {/* 2. Yahan 'todo.title' aur 'todo.desc' likhein */}
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
            
        </div>
        <hr />
        </>
    )
}

export default TodoItem;