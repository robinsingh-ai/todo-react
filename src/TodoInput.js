import React, { useState } from "react";
import "./TodoInput.css";
import { database } from "./Firebase";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolutere",
    margin: "200px 500px",
    width: 400,
    backgroundColor: "#ffef62",
    padding: "50px",
  },
}));
function TodoInput(props) {
  const classes = useStyles();

  const [input, setinput] = useState();

  const [open, setOpen] = useState(false);

  const upDateTodo = () => {
    database.collection("todos list").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(event) => setOpen(false)}>
        <div className={classes.paper}>
          <h2>Edit Todo</h2>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setinput(event.target.value)}
            type="text"
            class="my-2 form-control"
          />
          <button
            onClick={upDateTodo}
            className="btn btn-sm btn-outline-primary"
          >
            Done
          </button>
        </div>
      </Modal>
      <div className="jumbotron mr-4 todoinputmain">
        <div className="">
          <h6 className="cardtag">Todo...</h6>
          <p className="lead maininfo">{props.todo.todo}</p>
          <button
            onClick={(event) =>
              database.collection("todos list").doc(props.todo.id).delete()
            }
            className="btn btn-sm btn-outline-danger mr-1"
          >
            Done
          </button>
          <button
            onClick={(event) => setOpen(true)}
            className="btn btn-sm btn-outline-primary"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoInput;
