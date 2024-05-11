import React from "react";
import ImageLinks from "../../utils/ImageLinks";
import './styles.css';

type Props = {
    handleShowAddTaskModal: () => void;
}

const AddTask: React.FC<Props> = ({ handleShowAddTaskModal }) => {
    return (
        <div className="addTask-container" onClick={handleShowAddTaskModal}>
            <img className="icon" src={ImageLinks.add} alt="Add Icon" />
            <p className="text">Add a task</p>
        </div>
    );
};

export default AddTask;