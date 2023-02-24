import { Task } from "@entities/task/model";

const TaskItem = ({ id, title }: Omit<Task, 'completed'>) => (
    <div>{title}</div>
)

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
    return (
        <>
            {
                tasks.map(task => (
                    <TaskItem key={task.id} id={task.id} title={task.title} />
                ))
            }
        </>
    )
}