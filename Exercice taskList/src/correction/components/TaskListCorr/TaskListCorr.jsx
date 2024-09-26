import clsx from "clsx";
import { taskPriorityEnum } from "../../enums/taskEnum";
const TaskItemCorr = ({
	id,
	name,
	desc,
	priority,
	isDone,
	onDelete = () => {},
	onFinish = () => {},
}) => {
	const itemClassName = clsx("taskListItem", isDone && "taskListItemDone");
	const dataClassName = clsx("taskData", priority === taskPriorityEnum.urgent);
	return (
		<div className="tasklistItem">
			<div className={dataClassName}>
				<p>{name}</p>
				{desc && <p>{desc}</p>}
			</div>
			;
			<div className="taskAct">
				<button
					className="taskActFinish"
					disabled={isDone}
					onClick={() => onFinish(id)}
				>
					Terminer
				</button>
				<button onClick={() => onDelete(id)}>Supprimer</button>
			</div>
		</div>
	);
};

const TaskListCorr = ({ allTasks = [], onTaskDelete, onTaskFinish }) => {
	return (
		<div>
			{allTasks.map((task) => {
				<TaskItemCorr
					{...task}
					key={task.id}
					onDelete={{ onTaskDelete }}
					onFinish={onTaskFinish}
				/>;
			})}
		</div>
	);
};

export default TaskListCorr;
