import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

const Task = () => {
	const [newTask, setNewTask] = useState([]);

	const handleNewTask = (task) => {
		setNewTask((prevTask) => [...prevTask, task]);
	};
	return (
		<>
			<section>
				<TaskForm onFormingTask={handleNewTask} />
			</section>
			<section>
				<TaskList taskInfo={newTask} />
			</section>
		</>
	);
};

export default Task;
