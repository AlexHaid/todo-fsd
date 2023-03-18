import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTask, Task, updateTask } from "../model";

export const TaskItem = ({ title, id }: Omit<Task, "completed">) => {
    const dispatch = useDispatch();

    const [text, setText] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    const handleSave = () => {
        dispatch(
            updateTask({
                id,
                changes: {
                    title: text,
                },
            }),
        );

        setIsEditing(false);
        setText("");
    };

    const handleCancel = () => {
        setIsEditing(false);
        setText("");
    };

    const handleEdit = () => {
        setText(title);
        setIsEditing(true);
    };

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setText(evt.target.value);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={text}
                        className={isEditing ? "task-editing" : ""}
                    />

                    <button disabled={!text} onClick={handleSave}>
                        Save
                    </button>

                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <span>{title}</span>

                    <button onClick={handleEdit}>Edit</button>

                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
};
