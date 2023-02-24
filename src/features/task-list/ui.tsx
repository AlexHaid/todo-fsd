import { Task } from "@entities/task/model"

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
    return (
        <>
            {
                tasks.map(task => (
                    //TODO move out to task entity due to additional functionality
                    <div key={task.id}>{task.title}</div>
                ))
            }
        </>
    )
}