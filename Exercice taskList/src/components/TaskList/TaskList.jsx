const TaskList = ({ taskInfo }) => {
	console.log(taskInfo);

	const list = taskInfo.map((task) => (
		<div key={taskInfo.id}>
			<h2>{task.name}</h2>
			<p>{task.description}</p>
		</div>
	));

	return (
		<div>
			{list}
			<div>
				<button>Terminer</button>
				<button>Supprimer</button>
			</div>
		</div>
	);
};

export default TaskList;
