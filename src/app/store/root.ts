import { configureStore } from '@reduxjs/toolkit'
import { taskListSlice } from '@entities/task'

export const store = configureStore({
  reducer: {
    [taskListSlice.name]: taskListSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
