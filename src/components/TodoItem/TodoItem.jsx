import { useCallback } from 'react';
import './TodoItem.css';

function TodoItem (props) {
    const handleChangeStatus = useCallback(() => {
        props.onChange(props.status, props.name)
    }, [props.status, props.name])
    // const [status, setStatus] = useState(props.status);

    // The first example - not used:
    // const handleChangeStatus = useCallback (() => {
    //     if (status === "new") {
    //         setStatus("progress");
    //     } else if (status === "progress") {
    //         setStatus("done");
    //     }else if (status === "done") {
    //         setStatus("new");
    //     }
    // }, [status])

    return (
        <div className="todo-item">
            <div className={`todo-item_status is-${props.status}`}>
                {props.status}
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