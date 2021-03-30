import { useState, useCallback } from 'react';
import './TodoItem.css';

function TodoItem (props) {
    const [status, setStatus] = useState('new');

    const handleChangeStatus = useCallback (() => {
        if (status === "new") {
            setStatus("progress");
        } else if (status === "progress") {
            setStatus("done");
        }else if (status === "done") {
            setStatus("new");
        }
    }, [status])

    return (
        <div className="todo-item">
            <div className={`todo-item_status is-${status}`}>
                {status}
            </div>
            <div className="todo-item_name">
                {props.name}
            </div>
            <button onClick={handleChangeStatus}>
                Change status
            </button>

        </div>
    )
};

export default TodoItem;