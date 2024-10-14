import { renderHook, act } from '@testing-library/react'
import { useTodos } from './useTodos'

describe('useTodos', () => {
	it('should initial render state', () => {
		const { result } = renderHook(() => useTodos())

		expect(result.current.todos).toEqual([])
		expect(result.current.filter).toBe('all')
		expect(result.current.leftItems).toBe(0)
	})
	it('should add a new task', () => {
		const { result } = renderHook(() => useTodos())

		act(() => {
			result.current.addTodo('New task')
		})

		expect(result.current.todos).toEqual([{ id: expect.any(Number), title: 'New task', checked: false }])
		expect(result.current.leftItems).toBe(1)
		expect(result.current.filter).toBe('all')
	})
	it('should toggle todo', () => {
		const { result } = renderHook(() => useTodos())

		act(() => {
			result.current.addTodo('New task')
		})

		const id = result.current.todos[0].id

		act(() => {
			result.current.toggleTodo(id)
		})

		expect(result.current.todos).toEqual([{ id, title: 'New task', checked: true }])
		expect(result.current.filter).toEqual('all')

		act(() => {
			result.current.toggleTodo(id)
		})

		expect(result.current.todos).toEqual([{ id, title: 'New task', checked: false }])
	})
	it('should remove completed todos', () => {
		const { result } = renderHook(() => useTodos())

		act(() => {
			result.current.addTodo('Task 1')
			result.current.addTodo('Task 2')
		})

		const todoId1 = result.current.todos[0].id
		const todoId2 = result.current.todos[1].id

		act(() => {
			result.current.toggleTodo(todoId1)
			result.current.clearCompletedTodos()
		})

		expect(result.current.todos).toEqual([{ id: todoId2, title: 'Task 2', checked: false }])
		expect(result.current.leftItems).toBe(1)
	})
	it('should filter todos based on the selected filter', () => {
		const { result } = renderHook(() => useTodos())

		act(() => {
			result.current.addTodo('Task 1')
		})

		act(() => {
			result.current.toggleTodo(result.current.todos[0].id)
		})

		act(() => {
			result.current.addTodo('Task 2')
			result.current.addTodo('Task 3')
		})

		act(() => {
			result.current.setFilter('active')
		})

		expect(result.current.todos).toEqual([
			{ id: expect.any(Number), title: 'Task 2', checked: false },
			{ id: expect.any(Number), title: 'Task 3', checked: false }
		])

		act(() => {
			result.current.setFilter('completed')
		})

		expect(result.current.todos).toEqual([{ id: expect.any(Number), title: 'Task 1', checked: true }])
	})
})
