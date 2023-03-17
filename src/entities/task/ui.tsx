import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTask, selectAll, Task, updateTask } from "./model";

const TaskItem = ({ title, id }: Omit<Task, "completed">) => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const handleClick = (id: string) => {
        dispatch(deleteTask(id));
    };

    const handleChange = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setText(target.value);
    };

    const handleFocus = (e: SyntheticEvent) => {
        setIsEditing(true);
        const target = e.target as HTMLInputElement;
        setText(target.value);
    };

    const handleBlur = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setText(target.value);
        setIsEditing(false);
        dispatch(
            updateTask({
                id,
                changes: { title: text },
            }),
        );
    };

    useEffect(() => {
        setText(title);
    }, [title]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => handleChange(e)}
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                value={text}
                className={isEditing ? "task-editing" : ""}
            />

            <button onClick={() => handleClick(id)}>Delete</button>
        </div>
    );
};

export const TaskList = () => {
    const tasks = useSelector(selectAll);

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} id={task.id} title={task.title} />
            ))}
        </div>
    );
};
