import React, { useState } from "react";
import { Todo } from '../../types/interfaces';
import './styles.css';

type Props = {
    handleAddTask: (newTask: Todo) => void;
    handleAddTaskCancel: () => void;
}

const AddModal: React.FC<Props> = ({ handleAddTask, handleAddTaskCancel }) => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskName(event.target.value);
    };

    function handleDescriptionTyping(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskDescription(event.target.value);
    };

    function handleAdd() {
        const newTask: Todo = {
            id: Math.random(),
            title: taskName,
            description: taskDescription,
            completed: false,
        }
        if (handleAddTask) {
            handleAddTask(newTask);
        }
    }

    return (
        <div className="background">
            <div className="add-task-container">
                <div>
                    <p className="nametext">Title</p>
                    <input className="title-input" type="text" placeholder="Task name" onChange={handleTyping} value={taskName} />
                </div>
                <div>
                    <p className="nametext">Description</p>
                    <input className="title-input" type="text" placeholder="Task description" onChange={handleDescriptionTyping} value={taskDescription} />
                </div>
                <div className="buttons">
                    <button className="add-task-cancel-button" onClick={handleAddTaskCancel}>Cancel</button>
                    <button disabled={!!!taskName} className={`add-task-add-button ${!taskName ? 'add-task-opacity' : ''}`} onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    )
};

export default AddModal;