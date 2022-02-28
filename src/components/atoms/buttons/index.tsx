import { FC } from 'react';
import {
  Link,
  Button,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import { FontSize, ScreenSize } from 'components/constants';

type SubmitButtonProps = {
  text: 'ログイン' | '登録' | '作成';
};

type ShowMoreButtonProps = {
  isDetailOpened: boolean;
  onClick: () => void;
};

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
`;
const GoogleSignInButton: FC = () => {
  return (
    <GoogleSignInButtonRoot sx={{ marginBottom: '1.5rem' }}>
      <GoogleIcon sx={{ marginRight: '5px' }} />
      <Typography>SIGN IN WITH GOOGLE</Typography>
    </GoogleSignInButtonRoot>
  );
};

const ShowMoreButton: FC<ShowMoreButtonProps> = ({
  isDetailOpened,
  onClick,
}) => {
  return (
    <Link
      onClick={onClick}
      sx={{ color: '#A9A9A9' }}
      component={Button}
      underline='none'
    >
      <Typography fontSize={FontSize['xxs']}>
        {isDetailOpened ? 'Show Less' : 'Show More'}
      </Typography>
    </Link>
  );
};

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
`;

const CustomSubmitButton: FC<SubmitButtonProps> = ({ text }) => {
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);

  return (
    <Button
      type='submit'
      sx={
        isLargerThanIphone
          ? { width: '30rem', height: '3.5rem', borderRadius: '35rem' }
          : { width: '15rem', borderRadius: '35rem' }
      }
      color='primary'
      variant='contained'
    >
      {text}
    </Button>
  );
};

export { GoogleSignInButton, ShowMoreButton, CustomSubmitButton };
