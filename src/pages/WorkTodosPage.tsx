import React from 'react';
import { ITodo } from '../types/data';
import TodoCard from '../utils/TodoCard';
import TodoList from '../utils/TodoList';

interface WorkTodosPageProps {
	todos: ITodo[]
	remove: (todo: ITodo) => void
}

const WorkTodosPage: React.FC<WorkTodosPageProps> = (props) => {
	const filteredTodosByCategory = props.todos.filter(todo => todo.category === "work")
	return (
		<TodoList items={filteredTodosByCategory} renderItem={(todo: ITodo) => <TodoCard remove={props.remove} todo={todo} key={todo.id} />} />
	);
};

export default WorkTodosPage;