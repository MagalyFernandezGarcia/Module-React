import { useRef, useState } from "react";

import TaskFormCorr from "../../components/TaskForm/TaskFormCorr";
import { taskPriorityEnum } from "../../enums/taskEnum";
import TaskListCorr from "../../components/TaskListCorr/TaskListCorr";

const Todo = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			name: "Tâche de test",
			desc: "Il faudra virer cette tâche quand on a fini",
			priority: taskPriorityEnum.urgent,
			isDone: false,
		},
	]);

	const nextTaskId = useRef(2);

	const handleNewTask = (data) => {
		const task = {
			...data,
			id: nextTaskId.current++,
			isDone: false,
		};
		setTasks((oldTasks) => [...oldTasks, task]);
	};

	const handelDeleteTask = (id) => {
		setTasks((tasks) => tasks.filter((task) => task.id !== id));
	};

	const handleFinishTask = (id) => {
		setTasks(
			tasks.map((task) => (task.id !== id ? task : { ...task, isDone: true }))
		);
	};
	return (
		<>
			<h2>Correction</h2>
			<h3>Ajouter une tâche</h3>
			<TaskFormCorr onTaskSubmit={handleNewTask} />
			<h2>Liste des tâches</h2>
			<TaskListCorr
				allTasks={tasks}
				onTaskDelete={handelDeleteTask}
				onTaskFinish={handleFinishTask}
			/>
		</>
	);
};

export default Todo;
