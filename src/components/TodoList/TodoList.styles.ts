import { styled } from '@mui/material'

export const StyledTodoListContainer = styled('div')(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	marginInline: 'auto',
	maxWidth: 500,
	boxShadow: theme.shadows[4],
	backgroundColor: 'white'
}))
