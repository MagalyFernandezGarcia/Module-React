import "./App.css";
import Task from "./components/Task/Task";
import Header from "./containers/Header/Header";
import Todo from "./correction/containers/Todo/todo";

function App() {
	return (
		<>
			<Header />
			<main>
				<Task />
				<Todo />
			</main>
		</>
	);
}

export default App;
