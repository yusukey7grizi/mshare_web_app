import { Grid, Link, Typography, useMediaQuery } from '@mui/material';
import { FontSize, MinScreenSize } from 'components/constants';

type AuthSwitchLinkProps = {
  useCase: 'logIn' | 'register';
};

const AuthSwitchLink: React.FC<AuthSwitchLinkProps> = ({ useCase }) => {
  const isSignUp = useCase === 'register';

  const text = isSignUp
    ? '既にアカウントをお持ちですか？'
    : 'まだアカウントをお持ちではないですか？';
  const linkText = isSignUp ? 'ログイン。' : '新規登録。';
  const href = isSignUp ? '/auth/login' : '/auth/register';
  const isLargeScreenSize = useMediaQuery(MinScreenSize['s']);
  const fontSize = isLargeScreenSize ? FontSize['s'] : FontSize['xxs'];

  return (
    <Grid
      sx={{
        display: 'flex',
        marginTop: '2rem',
      }}
    >
      <Typography fontSize={fontSize}>{text}</Typography>
      <Link fontSize={fontSize} href={href}>
        {linkText}
      </Link>
    </Grid>
  );
};

export { AuthSwitchLink };
