import React from "react";
import ImageLinks from "../../utils/ImageLinks";
import './styles.css';

type Props = {
    title: string;
    description: string;
    completed: boolean;
    handleShowDeleteModal: () => void;
    handleCheck: () => void;
}

const TaskCard: React.FC<Props> = ({ title, description, completed, handleShowDeleteModal, handleCheck }) => {
    return (
        <div className="taskCard-container">
            <div className="tasCard-left-container">
                <div className="check-field">
                    <input type="checkbox" className="invisible-check" />
                    <div className="checkbox-ring" onClick={handleCheck}>
                        <div className={`check-fill ${completed ? 'done' : ''}`}></div>
                    </div>
                </div>
                <div className="description">
                    <h2 className={`name ${completed ? 'done' : ''} ${!description ? 'nameV1' : ''}`}>{title}</h2>
                    {description ? (
                        <div className="list-belong">
                            <p className="list-name">{description}</p>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="tasCard-right-container">
                <img className="icon" src={ImageLinks.erase} alt="Delete Icon" onClick={handleShowDeleteModal} />
            </div>
        </div>
    );
};

export default TaskCard;