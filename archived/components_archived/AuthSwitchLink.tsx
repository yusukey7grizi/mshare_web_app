import { Grid, Link, Typography, useMediaQuery } from '@mui/material';
import { FontSize, ScreenSize } from 'components/constants';

type AuthSwitchLinkProps = {
  useCase: 'logIn' | 'register';
};

const AuthSwitchLink: React.FC<AuthSwitchLinkProps> = ({ useCase }) => {
  const isSignUp = useCase === 'register';

  const text = isSignUp
    ? '既にアカウントをお持ちですか？'
    : 'まだアカウントをお持ちではないですか？';
  const linkText = isSignUp ? 'ログイン。' : '新規登録。';
  const path = isSignUp ? '/auth/login' : '/auth/register';
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);
  const fontSize = isLargerThanIphone ? FontSize['s'] : FontSize['xs'];

  return (
    <Grid
      sx={{
        display: 'flex',
        marginTop: '2rem',
        flexDirection: 'column',
      }}
    >
      <Typography fontSize={fontSize}>{text}</Typography>
      <Link margin='auto' fontSize={fontSize} href={path}>
        {linkText}
      </Link>
    </Grid>
  );
};

export { AuthSwitchLink };
