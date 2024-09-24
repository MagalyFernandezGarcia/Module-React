import { useId, useState } from "react";
import { nanoid } from "nanoid";

const TaskForm = ({ onFormingTask = (data) => {} }) => {
	const inputId = useId();
	const [inputName, setInputName] = useState("");
	const [textArea, setTextArea] = useState("");
	const [priority, setPriority] = useState("normal");

	const handleSubmit = (event) => {
		event.preventDefault();

		const newTask = {
			id: nanoid(),
			name: inputName,
			description: textArea,
			priority: priority,
		};
		onFormingTask(newTask);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor={inputId + "name"}>Nom : </label>
				<input
					type="text"
					name="name"
					id={inputId + "name"}
					value={inputName}
					onChange={(e) => setInputName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor={inputId + "description"}>Description : </label>
				<textarea
					name="description"
					id={inputId + "description"}
					value={textArea}
					onChange={(e) => setTextArea(e.target.value)}
				></textarea>
			</div>
			<div>
				<label htmlFor="">Priorité : </label>
				<select
					name="priority"
					id={inputId + "priority"}
					onChange={(e) => setPriority(e.target.value)}
				>
					<option value="low">Basse</option>
					<option value="normal">Normal</option>
					<option value="urgent">Urgent</option>
				</select>
			</div>
			<button type="submit">Ajouter</button>
		</form>
	);
};

export default TaskForm;
