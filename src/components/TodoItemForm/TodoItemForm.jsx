import { useState, useCallback } from 'react';
import './TodoItemForm.css';

function TodoItemForm (props) {
    const [name, setName] = useState('');
    const [status, setFormStatus] = useState('new');
    
    const handleSubmitForm = useCallback ((event) => {
       event.preventDefault();
       props.onSave(name, status);
   }, [ status, name, props ])

    return (
    <div>
        <form className="form-add" onSubmit={handleSubmitForm}>
            <div className="form-addLabel">
                <label htmlFor="status">Status:</label>
                <select 
                    className="form-add-input" 
                    name="status" 
                    id="status"
                    onChange = {(event) => setFormStatus(event.target.value)}
                    
                >
                    <option value="new">new</option>
                    <option value="progress">in progress</option>
                    <option value="done">done</option>
                </select> 
            </div>
            <div className="form-addLabel">
                <label htmlFor="name">Description:</label>
                <input 
                    className="form-add-input" 
                    type="text" 
                    id="name"
                    onChange={(event) => setName(event.target.value)} />
            </div>
            <button className="form-brn-Submit" type="submit">save</button>
            
        </form>
    </div>
    )
};

export default TodoItemForm;