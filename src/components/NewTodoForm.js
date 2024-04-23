import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import BasicAutoComplete from "../BasicAutoComplete";


function NewTodoForm(props) {
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');
    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    const submitTodo = () => {
        if (description !== '' && assigned != '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    // const descriptionChange = (event) => {
    //     //can log the values users are typing.
    //     console.log('Description', event.target.value);
    //     setDescription(event.target.value);
    // }

    // const assignedChange = (event) => {
    //     console.log('Assigned', event.target.value);
    //     setAssigned(event.target.value);
    // }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    {/* <input
                        type='text'
                        className="form-control"
                        required
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                    >
                    </input> */}
                    <div className="card flex justify-content-center">
                        <AutoComplete value={assigned} suggestions={items} completeMethod={search} onChange={(e) => setAssigned(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3">
                    <label className='form-control'>Description</label>
                    <textarea
                        className='form-control'
                        rows={3}
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <div><BasicAutoComplete /></div>
                <button
                    type="button"
                    className='btn btn-primary mt-3'
                    onClick={submitTodo}
                >Add Todos</button>
            </form>
        </div>
    )

}

export default NewTodoForm;