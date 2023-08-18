import React, { FC } from 'react'
import { styled, TextField as MuiTextField } from '@mui/material'
import { TextFieldProps } from './TextField.type'

const StyledMuiTextField = styled(MuiTextField)(({ theme }) => {
  return {
    '& .MuiOutlinedInput-root': {
      // borderRadius: theme.spacing(1.5),
    },
  }
})

export const TextField: FC<TextFieldProps> = (props) => (
  <StyledMuiTextField {...props} />
)

export default TextField
