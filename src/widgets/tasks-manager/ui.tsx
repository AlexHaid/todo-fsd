import { useSelector } from 'react-redux'
import { selectTasks, TaskList } from '@/entities/task'
import { AddTask } from '@/features/add-task'

export const TasksManager = () => {
  const tasks = useSelector(selectTasks)
  return (
    <div>
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  )
}
