import { useSelector } from "react-redux";
import { selectTasks } from "@entities/task/model";
import { AddTask } from "@features/add-task";
import { TaskList } from "@features/task-list";

export const TasksManager = () => {
    const tasks = useSelector(selectTasks);
    return (
        <div>
            <AddTask />
            <TaskList tasks={tasks} />
        </div>
    )
}