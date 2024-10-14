import { styled, Typography } from '@mui/material'

interface StyledTodoTitleProps {
	checked: boolean
}

export const StyledTodoTitle = styled(Typography)<StyledTodoTitleProps>(({ checked }) => ({
	textDecoration: checked ? 'line-through' : 'none',
	wordBreak: 'break-word'
}))

export const StyledTodoItem = styled('div')(({ theme }) => ({
	padding: theme.spacing(1)
}))
