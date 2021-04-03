import { useCallback, useState } from 'react';
import './TodoItem.css';

function TodoItem(props) {
    
    // const handleChangeStatus = useCallback(() => {
    //     props.onChange(props.status, props.name)
    // }, [props.status, props.name])

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

        </div>
    )
};

export default TodoItem;