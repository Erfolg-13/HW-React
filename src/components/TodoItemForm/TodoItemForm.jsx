import { useState, useCallback } from 'react';
import './TodoItemForm.css';

function TodoItemForm (props) {
    const [formName, setName] = useState(props.name);
    const [formStatus, setFormStatus] = useState('new');
    
    const handleSubmitForm = useCallback ((event) => {
       event.preventDefault();
       props.onSave(props.id, formStatus, formName);
       console.log('formStatus, formName', formStatus, formName)
   }, [ props, formStatus, formName  ])
 
  

    return (
    <div>
        <form className="form-add" onSubmit={handleSubmitForm}>
            <div className="form-addLabel">
                <label htmlFor="state">Status:</label>
                <select 
                    className="form-add-input" 
                    name="state" 
                    id="state"
                    value={props.status}
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
                    value={formName}
                    onChange={(event) => setName(event.target.value)} />
            </div>
            <button className="form-brn-Submit" type="submit">save</button>
            
        </form>
    </div>
    )
};

export default TodoItemForm;