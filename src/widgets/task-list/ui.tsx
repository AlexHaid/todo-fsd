import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { EntityState } from "@reduxjs/toolkit";

import {
    deleteTask,
    selectAllTasks,
    selectTaskById,
    Task,
    TaskItem,
    TaskItemProps,
    updateTask,
} from "@/entities/task";

import { AddTask } from "@/features/add-task";
import { EditTask } from "@/features/edit-task";

const TaskRow = ({ id }: TaskItemProps) => {
    const dispatch = useDispatch();
    const task = useSelector((state: { taskList: EntityState<Task> }) => selectTaskById(state, id));
    const [isEditing, setIsEditing] = useState(false);
    const stopEditing = () => {
        setIsEditing(false);
    };
    const startEditing = () => {
        setIsEditing(true);
    };
    const handleDelete = () => {
        dispatch(deleteTask({ id }));
    };

    const handleComplete = () => {
        dispatch(updateTask({ id, completed: !task?.completed }));
    };

    return (
        <div>
            {isEditing ? (
                <EditTask id={id} title={task?.title || ""} handleUpdate={stopEditing} />
            ) : (
                <span>
                    <TaskItem title={task?.title || ""} isCompleted={task?.completed} />
                </span>
            )}

            <button disabled={isEditing} onClick={startEditing}>
                Edit
            </button>

            <button onClick={handleDelete}>Delete</button>

            <button onClick={handleComplete}>
                {!task?.completed ? "Complete task" : "Decomplete task"}
            </button>
        </div>
    );
};

export const TaskList = () => {
    const tasks = useSelector(selectAllTasks);

    return (
        <>
            <AddTask />

            <div>
                {tasks.map(({ id }: Omit<Task, "completed">) => (
                    <TaskRow key={id} id={id} />
                ))}
            </div>
        </>
    );
};
