import React, { useState } from 'react';
import { ITodo } from '../types/data';
import MySelect from '../uicomponents/MySelect';
import './TodoCreator.scss'

interface TodoCreatorProps {
	addTodo: (newTask: any) => void
	todosLength: number 
}

const TodoCreator: React.FC<TodoCreatorProps> = ({ addTodo, todosLength }) => {
	const [task, setTask] = useState<ITodo>({ id: 1, title: '', category: '', completed: false, important: false });
	function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		const newTask = {
			id: todosLength + 1,
			title: task.title,
			category: task.category,
			completed: false,
			important: false
		}
		addTodo(newTask)
		setTask({id: 1, title: '', category: '', completed: false, important: false})
	}
	return (
		<form className='form'>
			<div className='inputContainer'>
				<input type='text' value={task.title} placeholder="just do it" onChange={e => setTask({ ...task, title: e.target.value })} />
			</div>
			{task.title &&
				<div className='selectContainer'>
					<MySelect
						options={[
							{ value: '', name: 'category' },
							{ value: 'home', name: 'home' },
							{ value: 'work', name: 'work' },
							{ value: 'travels', name: 'travels' }
						]}
						defaultValue=""
						onChange={selectedCategory => setTask({ ...task, category: selectedCategory })}
						value={task.category}
					/>
					<button style={{fontSize: 30, color:'#52a0e9', background:'none', padding: 7, border: "none", cursor: 'pointer'}} onClick={handleSubmit}>+</button>
				</div>
			}
		</form>
	);
};

export default TodoCreator;