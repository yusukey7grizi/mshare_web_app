import { FC } from 'react';
import { Link, Button, Typography, useMediaQuery } from '@mui/material';
import { FontSize, ScreenSize } from 'components/constants';

type SubmitButtonProps = {
  text: 'ログイン' | '登録' | '作成';
};

type ShowMoreButtonProps = {
  isDetailOpened: boolean;
  onClick: () => void;
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

export { ShowMoreButton, CustomSubmitButton };
