import { Grid, Link, Typography } from '@mui/material';

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

  return (
    <Grid sx={{ display: 'flex', marginTop: '2rem' }}>
      <Typography>{text}</Typography>
      <Link href={href}>{linkText}</Link>
    </Grid>
  );
};

export { AuthSwitchLink };
