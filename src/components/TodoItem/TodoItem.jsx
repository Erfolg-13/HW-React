import { useCallback} from 'react';
import './TodoItem.css';

function TodoItem(props) {

    const handleChangeStatus = useCallback (() => {
        props.onChange(props.id, props.status, props.name)
    }, [props]);

    const handleDeleteItem = useCallback (() => {
        props.onDelete(props.id);
    }, [props]);

    const handleEditItem = useCallback(() => {
        props.onEdit(props.id);
    }, [props]);

    return (
        <div className={`todo-item is-${props.status}`}>
            <div className={`todo-item_status is-${props.status}`}>
                {props.status}
            </div>
            <div className="todo-item_name">
                {props.name}
            </div>
            <button onClick={handleChangeStatus}>
                Change status
            </button>
            <button onClick={handleEditItem}>Edit</button>
            <button onClick={handleDeleteItem}>X</button>

        </div>
    )
};

export default TodoItem;