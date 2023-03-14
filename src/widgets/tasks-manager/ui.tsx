import { TaskList } from "@/entities/task";

import { AddTask } from "@/features/add-task";

export const TasksManager = () => {
    return (
        <div>
            <AddTask />

            <TaskList />
        </div>
    );
};
