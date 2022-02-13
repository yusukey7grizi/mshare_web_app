import { Grid, Link, Typography, useMediaQuery } from '@mui/material';
import { FontSize, MinScreenSize } from 'components/constants';
import { useRouter } from 'next/router';

type AuthSwitchLinkProps = {
  useCase: 'logIn' | 'register';
};

const AuthSwitchLink: React.FC<AuthSwitchLinkProps> = ({ useCase }) => {
  const isSignUp = useCase === 'register';
  const router = useRouter();

  const text = isSignUp
    ? '既にアカウントをお持ちですか？'
    : 'まだアカウントをお持ちではないですか？';
  const linkText = isSignUp ? 'ログイン。' : '新規登録。';
  const path = isSignUp ? '/auth/login' : '/auth/register';
  const isLargeScreenSize = useMediaQuery(MinScreenSize['s']);
  const fontSize = isLargeScreenSize ? FontSize['s'] : FontSize['xxs'];

  return (
    <Grid
      sx={{
        display: 'flex',
        marginTop: '2rem',
        flexDirection: isLargeScreenSize ? 'unset' : 'column',
      }}
    >
      <Typography fontSize={fontSize}>{text}</Typography>
      <Link
        margin='auto'
        fontSize={fontSize}
        onClick={() => {
          router.push(path);
        }}
      >
        {linkText}
      </Link>
    </Grid>
  );
};

export { AuthSwitchLink };
