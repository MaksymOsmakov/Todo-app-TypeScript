import { ITodo } from '../types/data';
import TodoCard from '../utils/TodoCard';
import TodoList from '../utils/TodoList';

interface ImportantTodosPageProps {
	todos: ITodo[]
	remove: (todo: ITodo) => void
}

const ImportantTodosPage: React.FC<ImportantTodosPageProps> = ({ todos, remove }) => {
	const filteredTodosByImportantMarck = todos.filter(todo => todo.important === true)
	return (
		<div>
			<TodoList items={filteredTodosByImportantMarck} renderItem={(todo: ITodo) => <TodoCard remove={remove} todo={todo} key={todo.id} />} />
		</div>
	);
};

export default ImportantTodosPage;