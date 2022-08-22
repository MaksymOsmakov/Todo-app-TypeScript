import React from 'react';
import { ITodo } from '../types/data';
import TodoCard from '../utils/TodoCard';
import TodoList from '../utils/TodoList';

interface TravelsTodosPageProps {
	todos: ITodo[]
	remove: (todo: ITodo) => void

}

const TravelsTodosPage: React.FC<TravelsTodosPageProps> = ({todos, remove}) => {
	const filteredTodosByCategory = todos.filter(todo => todo.category === "travels")
	return (
		<TodoList items={filteredTodosByCategory} renderItem={(todo: ITodo) => <TodoCard remove={remove} todo={todo} key={todo.id} />} />
	);
};

export default TravelsTodosPage;