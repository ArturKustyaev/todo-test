import { Input, inputClasses, styled } from '@mui/material'

export const StyledAddTodoForm = styled('form')(({ theme }) => ({
	padding: theme.spacing(1),
	borderBottom: `1px solid ${theme.palette.divider}`
}))

export const StyledAddInput = styled(Input)(({ theme }) => ({
	paddingBlock: theme.spacing(1),

	[`& .${inputClasses.input}`]: {
		padding: 0
	}
}))
