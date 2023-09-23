import { SyntheticEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { Task, updateTask } from "@/entities/task";

export const EditTask = ({ id, title, handleUpdate }: Omit<Task, "completed">) => {
    const dispatch = useDispatch();

    const [taskName, setTaskName] = useState(title);

    const handleSubmit = useCallback(
        (e: SyntheticEvent) => {
            e.preventDefault();

            dispatch(
                updateTask({
                    id,
                    title: taskName,
                    completed: false,
                }),
            );

            setTaskName("");
            handleUpdate?.();
        },
        [dispatch, taskName],
    );

    const handleChange = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setTaskName(target.value);
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    defaultValue={title}
                    placeholder="add new task..."
                />

                <button type="submit">Update task</button>
            </form>
        </div>
    );
};
