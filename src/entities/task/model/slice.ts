import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

const sliceName = "taskList";

export type Task = {
    id: string;
    title: string;
    completed: boolean;
    handleUpdate?: () => void;
};

const tasksAdapter = createEntityAdapter<Task>({
    selectId: (task) => task.id,
    sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const taskListSlice = createSlice({
    name: sliceName,
    initialState: tasksAdapter.getInitialState(),
    reducers: {
        addTask: (state, { payload }: PayloadAction<Task>) => {
            tasksAdapter.addOne(state, payload);
        },
        deleteTask: (state, { payload }: PayloadAction<{ id: string }>) => {
            tasksAdapter.removeOne(state, payload.id);
        },
        updateTask: (
            state,
            { payload }: PayloadAction<{ id: string; title?: string; completed?: boolean }>,
        ) => {
            tasksAdapter.updateOne(state, {
                id: payload.id,
                changes: payload,
            });
        },
    },
});

const selectSlice = (state: RootState) => state[sliceName];

export const { selectById: selectTaskById, selectAll: selectAllTasks } =
    tasksAdapter.getSelectors(selectSlice);
export const { addTask, deleteTask, updateTask } = taskListSlice.actions;
