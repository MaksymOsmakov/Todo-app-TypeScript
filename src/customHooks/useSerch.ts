import { ITodo } from './../types/data';
import { useMemo } from "react";

export const useFoundTodos = (todos: ITodo[], query: string) => {
	const newTodosList = useMemo(() => {
		return todos.filter(t => t.title.toLowerCase().includes(query))
	}, [todos, query])
	return newTodosList;
}