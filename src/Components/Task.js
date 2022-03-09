import React from "react";

const Task = ({task, ...props}) => {
    const ActionButton = () =>
        <div className="action-btn">
            {!task.complete ? (
                <p onClick={props.completeTask}>✅</p>
            ): (
                <p onClick={props.deleteTask}>❌</p>
            )}
        </div>
    const className = 'task ' + (task.complete ? 'task-done' : '');

    return (
        <div className={className}>
            <p>Task: {task.name}</p>
            <p>Description: {task.description}</p>
            <ActionButton/>
        </div>
    );
};

export default Task;