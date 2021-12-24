import { FormHelperText, Typography } from '@mui/material'
import { FormTextFieldContainer } from 'components/atoms/layoutElement'
import { AuthFormTextField } from 'components/atoms/textFields'

const EmailField = () => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>メールアドレス</Typography>
      <AuthFormTextField
        type="email"
        error={false}
        placeholder="メールアドレスを入力してください"
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        メールアドレスを入力してください
      </FormHelperText>
    </FormTextFieldContainer>
  )
}

const ConfirmEmailField = () => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>メールアドレスの確認</Typography>
      <AuthFormTextField
        type="email"
        error={false}
        placeholder="確認のためメールアドレスを再度入力してください"
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        メールアドレスを確認する必要があります
      </FormHelperText>
    </FormTextFieldContainer>
  )
}

export { EmailField, ConfirmEmailField }
