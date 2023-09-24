import styles from "./styles.module.css";

export const TaskItem = ({
    title,
    isCompleted,
}: {
    title: string;
    isCompleted: boolean | undefined;
}) => {
    return <div className={isCompleted ? styles.completed : ""}>{title}</div>;
};
