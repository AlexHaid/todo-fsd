import { SyntheticEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux"

import { v4 as uuidv4 } from "uuid";
import { addTask } from "@entities/task";

export const AddTask = () => {
    const dispatch = useDispatch();

    const [taskName, setTaskName] = useState('');

    const handleSubmit = useCallback((e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(addTask({
            id: uuidv4(),
            title: taskName,
            completed: false
        }));
        setTaskName('');
    }, [dispatch, taskName]);

    const handleChange = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement
        setTaskName(target.value);
    } 



    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={taskName} placeholder="add new task..." />
                <button disabled={!taskName} type="submit">Add task</button>
            </form>
        </div>
    )
}