import { useState, useEffect } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import style from "../TaskList/taskList.module.css";

const Task = () => {
	const [newTask, setNewTask] = useState([]);
	const [filteredTasks, setFilteredTasks] = useState(newTask);

	useEffect(() => {
		setFilteredTasks(newTask);
	}, [newTask]);

	const handleNewTask = (task) => {
		setNewTask((prevTask) => [...prevTask, task]);
	};

	const handleDelete = (id) => {
		setNewTask((tasks) => tasks.filter((a) => a.id !== id));
	};

	const handleFinish = (id, newValue, div) => {
		const taskItem = newTask.find((task) => task.id === id);
		if (taskItem) {
			taskItem.isFinished = newValue;

			div.current.classList.remove(style["urgent"]);
			div.current.classList.add(style["finished"]);
		}
	};

	const handleFilter = (value) => {
		switch (value) {
			case "current":
				setFilteredTasks(newTask.filter((a) => a.isFinished === false));
				break;
			case "urgent":
				setFilteredTasks(
					newTask.filter(
						(a) => a.priority === "urgent" && a.isFinished === false
					)
				);
				break;
			case "finished":
				setFilteredTasks(newTask.filter((a) => a.isFinished === true));
				break;
			case "all":
				setFilteredTasks(newTask);
				break;
		}
	};

	return (
		<>
			<section>
				<TaskForm onFormingTask={handleNewTask} />
			</section>
			<section>
				<TaskList
					taskInfo={filteredTasks}
					fwDelete={handleDelete}
					fwFinish={handleFinish}
					onFilter={handleFilter}
				/>
			</section>
		</>
	);
};

export default Task;
