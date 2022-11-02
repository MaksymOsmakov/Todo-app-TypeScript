import React, { useState } from 'react';
import { ITodo } from '../types/data';
import './TodoCard.scss'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

interface TodoCardProps {
	todo: ITodo
	remove: (todo: ITodo) => void
}


const TodoCard: React.FC<TodoCardProps> = ({ todo, remove }) => {
	const [checked, setChecked] = useState<boolean>(false);
	const changeCheckbox = () => {
		setChecked(!checked);
		todo.important = !todo.important;
	}


	return (
		<div className='todoCard' data-aos="fade-up" data-aos-offset="200" data-aos-once="false">
			<label className="container" title="done">
				<input type="checkbox" />
				<span className="checkmark" ></span>
				<div className='taskTitle'>
					<span>{todo.id}</span>
					<span>{todo.title}</span>
				</div>
			</label>
			<div className='btns'>
				<div className="important">
					<input className="star" type="checkbox" title="important" checked={todo.important} onChange={changeCheckbox} />
				</div>
				<div className='removeBtn'>
					<button title='delete' onClick={() => { remove(todo) }}>X</button>
				</div>
			</div>
		</div>
	);
};

export default TodoCard;