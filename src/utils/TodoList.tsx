import React from 'react';

interface TodoListProps<T> {
	items: T[]
	renderItem: (item: T) => React.ReactNode
}

export default function TodoList<T>(props: TodoListProps<T>) {
	return (
		<div>
			{props.items.map(props.renderItem)}
		</div>
	)
}