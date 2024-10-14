import { useCallback, useState } from 'react'
import { Filter, Todo } from '../types/todo'

export const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [filter, setFilter] = useState<Filter>('all')

	const leftItems = todos.filter(todo => !todo.checked).length
	const filteredTodos = todos.filter(todo => {
		if (filter === 'active') {
			return !todo.checked
		} else if (filter === 'completed') {
			return todo.checked
		}
		return true
	})

	const addTodo = (title: string) => {
		setTodos(prev => [...prev, { id: prev.length, title, checked: false }])
	}

	const toggleTodo = useCallback((id: number) => {
		setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
	}, [])

	const clearCompletedTodos = () => {
		setTodos(prev => prev.filter(todo => !todo.checked))
	}

	return { leftItems, todos: filteredTodos, filter, addTodo, toggleTodo, clearCompletedTodos, setFilter }
}
