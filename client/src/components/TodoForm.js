import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const TodoForm = (props) => {
    // Form initial state
    const [initialForm] = useState({
        title: "",
        textContent: "",
        created_at: "",
        completed: false,
    });

    // Form and form handler; we pass the initialForm to it 
    const [form, setForm] = useState(initialForm);

    // onChange handler
    const handleChange = e => {
        console.log(e.target.value);
        // Form is an object
        // 1. spread all the properties
        // 2. add the property name from the input : with the value; [title]: first todo
        setForm({...form, [e.target.name]: e.target.value});
    };

    // Submit handler
    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(form); // here we pass the form object we created;
        setForm(initialForm); // sets the form back to the initialForm value
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Task Name</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} className="autocomplete-input"/>

        <label htmlFor='textContent'>Description</label>
        <input type="text" name="textContent" value={form.textContent} onChange={handleChange} className="autocomplete-input"/>

        <label htmlFor="created_at">Date Created</label>
        <input type="date" name="created_at" onChange={handleChange} className="datepicker"/>

        <button className="waves-effect waves-light btn">Submit</button>
    </form>
  )
}

export default connect(null, {addTodo})(TodoForm)
