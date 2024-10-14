import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { StyledAddInput, StyledAddTodoForm } from './AddTodoForm.styles'

interface AddTodoFormProps {
	onAddTodo: (title: string) => void
}

export const AddTodoForm: FC<AddTodoFormProps> = ({ onAddTodo }): JSX.Element => {
	const [title, setTitle] = useState('')

	const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}

	const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (title.trim().length === 0) return

		onAddTodo(title.trim())
		setTitle('')
	}

	return (
		<StyledAddTodoForm onSubmit={addTodoHandler}>
			<StyledAddInput
				size='small'
				value={title}
				placeholder='Enter a task'
				disableUnderline
				fullWidth
				onChange={setTitleHandler}
			/>
		</StyledAddTodoForm>
	)
}
