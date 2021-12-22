import { FormHelperText, Typography } from '@mui/material'
import { AuthTextFieldContainer } from 'components/atoms/layoutElement'
import { AuthFormTextField } from 'components/atoms/textFields'

const EmailField = () => {
  return (
    <AuthTextFieldContainer>
      <Typography gutterBottom>メールアドレス</Typography>
      <AuthFormTextField
        type="email"
        error={false}
        placeholder="メールアドレスを入力してください"
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        メールアドレスを入力してください
      </FormHelperText>
    </AuthTextFieldContainer>
  )
}

const ConfirmEmailField = () => {
  return (
    <AuthTextFieldContainer>
      <Typography gutterBottom>メールアドレスの確認</Typography>
      <AuthFormTextField
        type="email"
        error={false}
        placeholder="確認のためメールアドレスを再度入力してください"
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        メールアドレスを確認する必要があります
      </FormHelperText>
    </AuthTextFieldContainer>
  )
}

export { EmailField, ConfirmEmailField }
