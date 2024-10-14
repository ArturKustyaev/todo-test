import { Divider, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { useTodos } from '../../hooks'
import { AddTodoForm } from '../AddTodoForm'
import { TodoFooter } from '../TodoFooter'
import { TodoItem } from '../TodoItem'
import { StyledTodoListContainer } from './TodoList.styles'

export const TodoList: FC = (): JSX.Element => {
	const { leftItems, todos, filter, addTodo, toggleTodo, clearCompletedTodos, setFilter } = useTodos()

	return (
		<StyledTodoListContainer>
			<AddTodoForm onAddTodo={addTodo} />
			{todos.length > 0 ? (
				<Stack divider={<Divider />} overflow='auto' maxHeight={400}>
					{todos.map(todo => (
						<TodoItem key={todo.id} todo={todo} onToggleTodo={toggleTodo} />
					))}
				</Stack>
			) : (
				<Typography variant='body2' textAlign='center' py={2}>
					No todos
				</Typography>
			)}
			<TodoFooter
				leftItems={leftItems}
				selectedFilter={filter}
				onSetFilter={setFilter}
				onClearTodos={clearCompletedTodos}
			/>
		</StyledTodoListContainer>
	)
}
