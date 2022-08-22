import React from 'react';
import { ITodo } from '../types/data';
import TodoCard from '../utils/TodoCard';
import TodoList from '../utils/TodoList';


interface AllTodosPageProps {
	todos: ITodo[]
	remove: (todo: ITodo) => void
}

const AllTodosPage: React.FC<AllTodosPageProps> = (props) => {
	return (
		<TodoList items={props.todos} renderItem={(todo: ITodo) => <TodoCard todo={todo} key={todo.id} remove={props.remove} />} />
	);
};

export default AllTodosPage;