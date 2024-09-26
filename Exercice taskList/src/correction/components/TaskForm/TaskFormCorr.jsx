import { useId, useState } from "react";
import { taskPriorityEnum } from "../../enums/taskEnum";

const TaskFormCorr = ({ onTaskSubmit = () => {} }) => {
	const inputIdCorr = useId();

	const [taskName, setTaskName] = useState("");
	const [desc, setDesc] = useState("");
	const [priority, setPriority] = useState(taskPriorityEnum.normal);

	const handleTaskSubmit = (event) => {
		event.preventDefault();

		const data = {
			name: taskName,
			desc,
			priority,
		};
		onTaskSubmit(data);
		setTaskName("");
		setDesc("");
		setPriority(taskPriorityEnum.normal);
	};

	return (
		<form>
			<label htmlFor={inputIdCorr + "name"}>Nom</label>
			<input
				type="text"
				id={inputIdCorr + "name"}
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			/>
			<label htmlFor={inputIdCorr + "desc"}>Description</label>
			<textarea
				id={inputIdCorr + "desc"}
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			/>
			<label htmlFor={inputIdCorr + "priority"}>Priorité</label>
			<select
				id={inputIdCorr + "priority"}
				value={priority}
				onChange={(e) => setPriority(e.target.value)}
			>
				<option value={taskPriorityEnum.low}>Basse</option>
				<option value={taskPriorityEnum.normal}>Normal</option>
				<option value={taskPriorityEnum.urgent}>Urgent</option>
			</select>
			<button type="submit" onClick={handleTaskSubmit}>
				Ajouter
			</button>
		</form>
	);
};

export default TaskFormCorr;
