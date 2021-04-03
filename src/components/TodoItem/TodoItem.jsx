import { useCallback, useState } from 'react';
import './TodoItem.css';

function TodoItem(props) {
    const [status, setStatus] = useState('new');

    const handleChangeStatus = useCallback (() => {
        if (status === "new") {
            return setStatus("progress");
        } else if (status === "progress") {
            return setStatus("done");
        } else if (status === "done") {
            return setStatus("new");
        };
        props.onChange(status);
    }, [status, props]);

    const handleDeleteItem = useCallback (() => {
        props.onDelete(props.id);
    }, [props]);



    return (
        <div className={`todo-item is-${status}`}>
            <div className={`todo-item_status is-${status}`}>
                {status}
            </div>
            <div className="todo-item_name">
                {props.name}
            </div>
            <button onClick={handleChangeStatus}>
                Change status
            </button>
            <button onClick={handleDeleteItem}>X</button>

        </div>
    )
};

export default TodoItem;