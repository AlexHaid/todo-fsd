import { useSelector } from "react-redux";

import { selectAll, Task } from "@/entities/task";
import { handleDelete, handleEdit } from "@/entities/task/model/handlers";
import { TaskItem } from "@/widgets/task-item";

export const TaskList = () => {
    const tasks = useSelector(selectAll);

    return (
        <div>
            {tasks.map(({ id, title }: Omit<Task, "completed">) => (
                <TaskItem id={id} key={id} title={title} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
        </div>
    );
};
