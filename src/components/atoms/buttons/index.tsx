import { FC, useMemo } from 'react';
import { Link, Button, Typography, useMediaQuery } from '@mui/material';
import { BasePixel, FontSize, ScreenSize } from 'components/constants';

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
  const styles = {
    typography: {
      fontSize: FontSize['xxs'],
    },
    link: {
      color: '#A9A9A9',
    },
  } as const;

  const text = useMemo(() => {
    return isDetailOpened ? 'Show Less' : 'Show More';
  }, [isDetailOpened]);

  return (
    <Link
      onClick={onClick}
      sx={styles.link}
      component={Button}
      underline='none'
    >
      <Typography sx={styles.typography}>{text}</Typography>
    </Link>
  );
};

const CustomSubmitButton: FC<SubmitButtonProps> = ({ text }) => {
  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);
  const styles = {
    width: isLargerThanIpad ? BasePixel * 120 : '100%',
    height: BasePixel * 16,
    borderRadius: BasePixel * 160,
  } as const;

  return (
    <Button type='submit' sx={styles} color='primary' variant='contained'>
      {text}
    </Button>
  );
};

export { ShowMoreButton, CustomSubmitButton };
