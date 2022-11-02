import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Layout.scss'
import { ITodo } from './types/data';
import TodoCreator from './utils/TodoCreator';




interface LayoutProps {
	setSearch: any
	search: any
	addTodo: (newTask: ITodo) => void
	todosLength: number
	workTodosQty: number | null
	homeTodosQty: number | null
	travelsTodosQty: number | null
	importantTodosQty: number | null
}
const setActiveClass = ({ isActive }: any) => isActive ? 'active-link' : ''


const Layout: React.FC<LayoutProps> = ({ addTodo, search, setSearch, todosLength, workTodosQty, importantTodosQty, homeTodosQty, travelsTodosQty }) => {
	const categories = ([
		{ id: 1, title: 'All tasks', path: '/', qty: todosLength },
		{ id: 2, title: 'Home', path: 'home', qty: homeTodosQty },
		{ id: 3, title: 'Work', path: 'work', qty: workTodosQty },
		{ id: 4, title: 'Travels', path: 'travels', qty: travelsTodosQty },
		{ id: 5, title: 'Important', path: 'important', qty: importantTodosQty }
	])
	const navigate = useNavigate()

	return (
		<div className='layout'>
			<header className='header'>
				<img className='icon' alt='done' src='https://cdn-icons-png.flaticon.com/512/1828/1828640.png' />
				<h1><a target='_blank' href="https://github.com/MaksymOsmakov " rel="noreferrer">Osmakov</a> To Do </h1>
			</header>

			<div className='navBarContainer'>
				<div className="search">
					<input
						type="text"
						placeholder='Search'
						value={search}
						onChange={e => {
							setSearch({ ...search, query: e.target.value })
							navigate('/')
						}}
					/>
				</div>
				<nav className='navBar'>
					{categories.map(c =>
						<div key={c.id} className='navItem'>
							<NavLink className={setActiveClass} to={c.path} >{c.title}
								{c.qty ? <span>{c.qty}</span> : null}
							</NavLink>
						</div>
					)}
				</nav>
			</div>

			<main className='main'>
				<div className='pagesContainer'>
					<Outlet />
				</div>
				<div className='creatorContainer'>
					<TodoCreator addTodo={addTodo} todosLength={todosLength} />
				</div>
			</main>

		</div>
	);
};

export default Layout;