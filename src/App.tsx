import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './Layout';
import AllTodosPage from './pages/AllTodosPage';
import HomeTodosPage from './pages/HomeTodosPage';
import WorkTodosPage from './pages/WorkTodosPage';
import TravelsTodosPage from './pages/TravelsTodosPage';
import { ITodo } from './types/data';
import NotFoundPage from './pages/NotFoundPage';
import ImportantTodosPage from './pages/ImportantTodosPage';
import { useFoundTodos } from './customHooks/useSerch';

function App() {
	const [todos, setTodos] = useState<ITodo[]>([
	]);
	const [search, setSearch] = useState({ query: '' })

	const qty = (query: string) => todos.filter(t => t.category === query).length
	const addTodo = (newTodo: ITodo) => {
		setTodos([...todos, newTodo])
	}
	const foundTodos = useFoundTodos(todos, search.query)
	const removeTodo = (todo: ITodo) => {
		setTodos(todos.filter(t => t.id !== todo.id))
	}

	const [importantQty, setImportantQty] = useState<number>(0);
	const i = todos.filter(t => t.important === true).length
	useEffect(() => {
		setImportantQty(i)
	}, [todos, i]);


	return (
		<Routes>
			<Route path='/' element={<Layout setSearch={setSearch} search={search.query} addTodo={addTodo} importantTodosQty={importantQty} todosLength={todos.length} workTodosQty={qty('work')} homeTodosQty={qty('home')} travelsTodosQty={qty('travels')} />}>
				<Route index element={<AllTodosPage todos={foundTodos} remove={removeTodo} />} />
				<Route path="/home" element={<HomeTodosPage todos={todos} remove={removeTodo} />} />
				<Route path="work" element={<WorkTodosPage todos={todos} remove={removeTodo} />} />
				<Route path="travels" element={<TravelsTodosPage todos={todos} remove={removeTodo} />} />
				<Route path="important" element={<ImportantTodosPage todos={todos} remove={removeTodo} />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default App;
