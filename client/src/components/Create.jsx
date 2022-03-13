import React , { useState } from 'react';
import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env

const DEFAULT_STATE = {
    description: '',
    responsible: '',
    priority: '',
    completed: false
}

const Create = () => {

    const [formState, setFormState] = useState(DEFAULT_STATE);

    const onChangeTodoDescription = (e) => setFormState({...formState, description: e.target.value });

    const onChangeTodoResponsible = (e) => setFormState({...formState, responsible: e.target.value });

    const onChangeTodoPriority = (e) => setFormState({...formState, priority: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${REACT_APP_BACKEND_URL}/add`, formState)
        setFormState(DEFAULT_STATE);
    }

    return (
        <div>
            <h3>Create New Todo</h3>
            <form onSubmit = {onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                            className="form-control"
                            value={formState.description}
                            onChange={onChangeTodoDescription}
                            />

                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input type="text"
                            className="form-control"
                            value={formState.responsible}
                            onChange={onChangeTodoResponsible}
                            />
                            
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={formState.priority === "Low"}
                                onChange={onChangeTodoPriority}
                                />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={formState.priority === "Medium"}
                                onChange={onChangeTodoPriority}
                                />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={formState.priority === "High"}
                                onChange={onChangeTodoPriority}
                                />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
};

export default Create;