import { TaskList } from "@/widgets/task-list";

import { UpsertTask } from "@/features/upsert-task";

export const TasksManager = () => {
    return (
        <div>
            <UpsertTask />

            <TaskList />
        </div>
    );
};
