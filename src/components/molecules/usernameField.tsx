import { FormHelperText, Typography } from '@mui/material'
import { AuthTextFieldContainer } from '../atoms/layoutElement'
import { AuthFormTextField } from '../atoms/textFields'

const UsernameField = () => {
  return (
    <AuthTextFieldContainer>
      <Typography gutterBottom>プロフィール名</Typography>
      <AuthFormTextField
        type="text"
        error={false}
        placeholder="プロフィール名を設定してください"
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        プロフィール名を設定する必要があります
      </FormHelperText>
    </AuthTextFieldContainer>
  )
}

export { UsernameField }
