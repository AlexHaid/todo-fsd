import { Task } from './model'

const TaskItem = ({ title }: Omit<Task, 'completed' | 'id'>) => <div>{title}</div>

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.title} />
      ))}
    </div>
  )
}
