import { Route, Routes } from 'react-router'
import { TasksPage } from './tasks'

export const Routing = () => (
  <Routes>
    <Route path='/' element={<TasksPage />} />
  </Routes>
)
