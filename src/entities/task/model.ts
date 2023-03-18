import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const sliceName = "taskList";

export type Task = {
    id: string;
    title: string;
    completed: boolean;
};

const tasksAdapter = createEntityAdapter<Task>({
    selectId: (task: Task) => task.id,
    sortComparer: (a: Task, b: Task) => a.title.localeCompare(b.title),
});

export const taskListSlice = createSlice({
    name: sliceName,
    initialState: tasksAdapter.getInitialState(),
    reducers: {
        addTask: tasksAdapter.addOne,
        deleteTask: tasksAdapter.removeOne,
        updateTask: tasksAdapter.updateOne,
    },
});

const selectSlice = (state: RootState) => state[sliceName];

export const { selectById, selectAll, selectIds } = tasksAdapter.getSelectors(selectSlice);
export const { addTask, deleteTask, updateTask } = taskListSlice.actions;
