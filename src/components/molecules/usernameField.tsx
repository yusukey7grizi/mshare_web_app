import { FormHelperText, Typography } from '@mui/material'
import { FormTextFieldContainer } from 'components/atoms/layoutElement'
import { AuthFormTextField } from 'components/atoms/textFields'

const UsernameField = () => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>プロフィール名</Typography>
      <AuthFormTextField
        type="text"
        error={false}
        placeholder="プロフィール名を設定してください"
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        プロフィール名を設定する必要があります
      </FormHelperText>
    </FormTextFieldContainer>
  )
}

export { UsernameField }
