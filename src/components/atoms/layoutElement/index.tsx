import { Box, styled, useMediaQuery } from '@mui/material';
import { BasePixel, ScreenSize } from 'components/constants';
import { FC } from 'react';

const FieldContainer: FC = ({ children }) => {
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIpad);
  const styles = {
    width: isLargerThanIphone ? BasePixel * 120 : '100%',
    paddingBottom: BasePixel * 8,
  } as const;

  return <Box sx={styles}>{children}</Box>;
};

const FlexBox = styled('div')({
  display: 'flex',
});

export { FieldContainer, FlexBox };
