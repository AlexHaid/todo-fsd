import { useState } from "react";

import { UpsertTask } from "@/features/upsert-task";

import TaskItemProps from "@/entities/task/types/task";

export const TaskItem = ({ title, onEdit, onDelete }: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            {isEditing ? <UpsertTask /> : <span>{title}</span>}

            <button onClick={onEdit}>Edit</button>

            <button onClick={onDelete}>Delete</button>
        </div>
    );
};
