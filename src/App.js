import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TodoInput from './TodoInput';
import {database} from './Firebase';
import firebase from 'firebase'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState('');

  

  useEffect(()=>{
    
    database.collection('todos list').orderBy('timestamp','desc').onSnapshot(snapshot =>{

      console.log(snapshot.docs.map(doc=>doc.data()));
      setTodos(snapshot.docs.map(doc=>({id:doc.id , todo: doc.data().todo})))
    })
  },[]);

  const AddtoDO = (event) => {
    event.preventDefault();
    setTodos([input, ...todos]);
    setinput(''); 
    database.collection('todos list').add({
      todo:input,
      
      timestamp:firebase.firestore.FieldValue.serverTimestamp()


    })
  };


  return (
    <div className="App container text-center my-3">
      <h1 className="mainheading">Hello World!! This is Robin Singh</h1>
      <form>
        <div className="form-group ">
          <label htmlFor="text">Type Todo Here!</label>
          <input placeholder="Enter Your Todos" value={input} onChange={event => setinput(event.target.value)} type="text" class="form-control text-center inputtext" />
          
          <button disabled={!input} className="btn btn-outline-dark mx-2 my-2" type='submit' onClick={AddtoDO} >Add Todo</button>
        </div>
      </form>

      <ul>
        <div className="">
          {todos.map(todo => (
            <TodoInput todo={todo} />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default App;
