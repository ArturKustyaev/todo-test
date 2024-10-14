import { Button, styled } from '@mui/material'

export const StyledFooter = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderTop: `1px solid ${theme.palette.divider}`,
	padding: theme.spacing(1.5, 1)
}))

export const StyledFilterButton = styled(Button)(({ theme }) => ({
	color: theme.palette.text.secondary,
	textTransform: 'initial'
}))
