import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/app/store";

const sliceName = "taskList";

export type Task = {
    id: string;
    title: string;
    completed: boolean;
};

export type State = {
    tasks: Task[];
};

const initialState: State = {
    tasks: [],
};

export const taskListSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        addTask: (state, { payload }: { payload: Task }) => {
            state.tasks.push(payload);
        },
    },
});

export const { addTask } = taskListSlice.actions;

const selectSlice = (state: RootState) => state[sliceName];

export const selectTasks = createSelector(selectSlice, ({ tasks }) => tasks);
