import React from "react";
import './styles.css';

type Props = {
    handleCloseDeleteModal: () => void;
    handleDelete: () => void;
}

const DeleteModal: React.FC<Props> = ({ handleCloseDeleteModal, handleDelete }) => {
    return (
        <div className="background">
            <div className="delete-container">
                <p className="text">Are you sure you want to delete this task?</p>
                <div className="buttons">
                    <button className="cancel-button" onClick={handleCloseDeleteModal}>Cancel</button>
                    <button className="delete-button" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
};

export default DeleteModal;