import { useSelector } from "react-redux";

import { selectTasks, Task } from "./model";

const TaskItem = ({ title }: Omit<Task, "completed" | "id">) => <div>{title}</div>;

export const TaskList = () => {
    const tasks = useSelector(selectTasks);

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} title={task.title} />
            ))}
        </div>
    );
};
