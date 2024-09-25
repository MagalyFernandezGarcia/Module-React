import { useEffect, useRef } from "react";
import style from "./taskList.module.css";

const TaskList = ({
	taskInfo,
	fwDelete,
	fwFinish,
	onFilter = (value) => {},
}) => {
	return (
		<>
			<h2>Liste des tâches</h2>

			<div>
				<label htmlFor="filter">Filter par : </label>
				<select
					name="filter"
					id="filter"
					onChange={(event) => onFilter(event.target.value)}
				>
					<option value="all">Toutes</option>
					<option value="current">En cours</option>
					<option value="urgent">Urgentes</option>
					<option value="finished">Terminées</option>
				</select>
			</div>
			{taskInfo.map((task) => (
				<TaskItem
					{...task}
					key={task.id}
					onDelete={fwDelete}
					onFinish={fwFinish}
				/>
			))}
		</>
	);
};

export default TaskList;

const TaskItem = ({
	id,
	name,
	description,
	priority,
	isFinished,
	onFinish = (id, isFinished, div) => {},
	onDelete = (id) => {},
}) => {
	const divTask = useRef();

	return (
		<div ref={divTask} className={priority === "urgent" && style["urgent"]}>
			<div key={id}>
				<h3>{name}</h3>
				{description !== "" && <p>{description}</p>}
			</div>
			<div>
				<button onClick={() => onFinish(id, !isFinished, divTask)}>
					Terminer
				</button>
				<button onClick={() => onDelete(id)}>Supprimer</button>
			</div>
		</div>
	);
};
