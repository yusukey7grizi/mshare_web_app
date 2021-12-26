import { FC, MouseEventHandler } from 'react'
import { Link, Button, Typography, IconButton } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { styled } from '@mui/system'
import ButtonUnstyled, { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled'
import GoogleIcon from '@mui/icons-material/Google'

type FormButtonProps = {
  text: 'ログイン' | '登録' | '作成' | 'ガチャる！'
}

type ShowMoreButtonProps = {
  isDetailOpened: boolean
  onClick: () => void
}
const GoogleSignInButtonRoot = styled(IconButton)`
  background-color: #000000;
  padding: 15px 10%;
  border-radius: 500px;
  color: #fff;
  font-weight: 200;
  font-size: 20px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #2e2e2e;
  }
`
const GoogleSignInButton: FC = () => {
  return (
    <GoogleSignInButtonRoot sx={{ marginBottom: '1.5rem' }}>
      <GoogleIcon sx={{ marginRight: '5px' }} />
      <Typography>SIGN IN WITH GOOGLE</Typography>
    </GoogleSignInButtonRoot>
  )
}

type LogOutButtonProps = {
  logOutHandler: () => void
}

const LogOutButton: FC<LogOutButtonProps> = ({ logOutHandler }) => {
  return (
    <Link component={Button} underline="none" onClick={logOutHandler}>
      <LogoutIcon />
      <Typography>ログアウト</Typography>
    </Link>
  )
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({
  isDetailOpened,
  onClick,
}) => {
  return (
    <Link
      onClick={onClick}
      sx={{ color: '#A9A9A9' }}
      component={Button}
      underline="none"
    >
      <Typography sx={{ fontSize: '0.5rem' }}>
        {isDetailOpened ? 'Show Less' : 'Show More'}
      </Typography>
    </Link>
  )
}
const CustomFormButtonRoot: FC = styled('button')`
  background-color: #007fff;
  width: 30%;
  height: 4rem;
  border-radius: 500px;
  color: #fff;
  font-weight: 200;
  font-size: 1rem;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }
`

const CustomFormButton: FC<ButtonUnstyledProps> = (props) => {
  return (
    <ButtonUnstyled type="submit" component={CustomFormButtonRoot} {...props} />
  )
}

const FormSubmitButton: FC<FormButtonProps> = ({ text }) => {
  return <CustomFormButton>{text}</CustomFormButton>
}

const RandomButton: FC = () => {
  return (
    <Button type="submit" sx={{ width: '20rem', fontSize: '1.5rem' }}>
      ガチャる！
    </Button>
  )
}

export {
  LogOutButton,
  FormSubmitButton,
  GoogleSignInButton,
  ShowMoreButton,
  RandomButton,
}
