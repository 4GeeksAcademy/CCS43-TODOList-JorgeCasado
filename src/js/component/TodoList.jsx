import React, { useState } from "react";

const TodoList = () => {
    const [task, setTask] = useState("");

    const [taskList, setTaskList] = useState([]);

    const [error, setError] = useState(false)

    const [active, setActive] = useState(false)

    const handleTask = (event) => {
        setTask(event.target.value);
    }
    const addTask = (event) => {
        if (event.key == "Enter") {
            if (event.target.value == "") {
                setError(true);

                alert("Please add a task!");

                return;
            }
            setTaskList([...taskList, task]);

            setTask("");

            setError(false);
        }
    }
    const deleteTask = (Id) => {
        console.log(Id);

        setTaskList(taskList.filter((task, index) => index != Id));
    }
    return (

        <div className="text-center vh-100 text-light bg-dark d-flex align-items-center justify-content-center gap-3 flex-column">

            <label htmlFor="task" className={`${error ? "text-danger fw-bold" : "light"}`}><strong>Task List</strong></label>

            <input className="bg-dark text-light" type="text" id="task" value={task} onKeyDown={addTask} onChange={handleTask} />
            <div>
                <ul>
                    {
                        taskList.map((task, index) => {
                            return <li className="task" key={index}>{task}<span className="delete" onClick={() => deleteTask(index)}> x </span></li>
                        })
                    }
                </ul>
            </div>
            <div>
                {taskList.length} Items left
            </div>
        </div>
    );
};
export default TodoList;


