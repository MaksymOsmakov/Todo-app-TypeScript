import React from 'react';
import { ITodo } from '../types/data';
import TodoCard from '../utils/TodoCard';
import TodoList from '../utils/TodoList';

interface HomeTodosPageProps {
	todos: ITodo[]
	remove: (todo: ITodo) => void
}

const HomeTodosPage: React.FC<HomeTodosPageProps> = ({ todos, remove }) => {
	const filteredTodosByCategory = todos.filter(todo => todo.category === "home")
	return (
		<TodoList items={filteredTodosByCategory} renderItem={(todo: ITodo) => <TodoCard remove={remove} todo={todo} key={todo.id} />} />
	);
};

export default HomeTodosPage;