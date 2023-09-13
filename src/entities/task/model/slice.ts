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
        addTask: (state, action) => {
            // eslint-disable-next-line no-console
            console.log(123, action.payload);
            tasksAdapter.addOne(state, action);
        },
        deleteTask: tasksAdapter.removeOne,
        updateTask: tasksAdapter.updateOne,
    },
});

const selectSlice = (state: RootState) => state[sliceName];

export const { selectById, selectAll, selectIds } = tasksAdapter.getSelectors(selectSlice);
export const { addTask, deleteTask, updateTask } = taskListSlice.actions;
