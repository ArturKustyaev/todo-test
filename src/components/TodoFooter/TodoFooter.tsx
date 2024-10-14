import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { FC, MouseEvent, ReactElement } from 'react'
import { StyledFilterButton, StyledFooter } from './TodoFooter.styles'
import { Filter } from '../../types/todo'

interface TodoFooterProps {
	leftItems: number
	selectedFilter: Filter
	onSetFilter: (value: Filter) => void
	onClearTodos: () => void
}

export const TodoFooter: FC<TodoFooterProps> = ({
	leftItems,
	selectedFilter,
	onSetFilter,
	onClearTodos
}): ReactElement | null => {
	const setFilterClickHandler = (_: MouseEvent<HTMLElement>, newValue: Filter | null) => {
		if (!newValue) return

		onSetFilter(newValue)
	}

	return (
		<StyledFooter>
			<Typography>{leftItems} items left</Typography>
			<ToggleButtonGroup value={selectedFilter} onChange={setFilterClickHandler} exclusive>
				<ToggleButton value='all' size='small'>
					All
				</ToggleButton>
				<ToggleButton size='small' value='active'>
					Active
				</ToggleButton>
				<ToggleButton size='small' value='completed'>
					Completed
				</ToggleButton>
			</ToggleButtonGroup>
			<StyledFilterButton size='small' onClick={onClearTodos}>
				Clear completed
			</StyledFilterButton>
		</StyledFooter>
	)
}
