import { FormHelperText, Typography } from '@mui/material'
import { AuthTextFieldContainer } from 'components/atoms/layoutElement'
import { AuthFormTextField } from 'components/atoms/textFields'

const PasswordField = () => {
  return (
    <AuthTextFieldContainer>
      <Typography gutterBottom>パスワード</Typography>
      <AuthFormTextField
        type="password"
        error={false}
        placeholder="パスワードを入力してください"
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        パスワードを入力してください
      </FormHelperText>
    </AuthTextFieldContainer>
  )
}

const ConFirmPasswordField = () => {
  return (
    <AuthTextFieldContainer>
      <Typography gutterBottom>パスワードの確認</Typography>
      <AuthFormTextField
        type="password"
        error={false}
        placeholder="確認のためパスワードを再度入力してください"
      />
      <FormHelperText error sx={{ visibility: 'hidden' }}>
        パスワードを確認する必要があります
      </FormHelperText>
    </AuthTextFieldContainer>
  )
}

export { PasswordField, ConFirmPasswordField }
