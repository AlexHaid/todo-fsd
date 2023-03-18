import { useSelector } from "react-redux";

import { selectAll, Task } from "../model";
import { TaskItem } from "./task-item";

export const TaskList = () => {
    const tasks = useSelector(selectAll);

    return (
        <div>
            {tasks.map(({ id, title }: Omit<Task, "completed">) => (
                <TaskItem key={id} id={id} title={title} />
            ))}
        </div>
    );
};
