import React , { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env

const List = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(REACT_APP_BACKEND_URL)
        .then( response => setTodos(response.data))
        .catch( err => console.log(err))
    }, [])

    return (
        <div>
            <h3>Todos List</h3>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        todos.map((todo) => (
                            <tr key={ todo._id }>
                                <td className = { todo.completed ? 'completed' : ''}>{ todo.description }</td>
                                <td className = { todo.completed ? 'completed' : ''}>{ todo.responsible }</td>
                                <td className = { todo.completed ? 'completed' : ''}>{ todo.priority }</td>
                                <td>
                                    <Link to={`/edit/${todo._id}`}>Edit</Link>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List