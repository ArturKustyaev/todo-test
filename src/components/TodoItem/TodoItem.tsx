import { Checkbox, FormControlLabel } from '@mui/material'
import { FC, memo } from 'react'
import { Todo } from '../../types/todo'
import { StyledTodoItem, StyledTodoTitle } from './TodoItem.styles'

interface TodoItemProps {
	todo: Todo
	onToggleTodo: (id: number) => void
}

export const TodoItem: FC<TodoItemProps> = memo(({ todo, onToggleTodo }): JSX.Element => {
	return (
		<StyledTodoItem>
			<FormControlLabel
				control={<Checkbox checked={todo.checked} onChange={() => onToggleTodo(todo.id)} />}
				label={<StyledTodoTitle checked={todo.checked}>{todo.title}</StyledTodoTitle>}
			/>
		</StyledTodoItem>
	)
})
