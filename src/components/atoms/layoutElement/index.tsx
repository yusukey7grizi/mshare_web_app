import { Box, styled, useMediaQuery } from '@mui/material';
import { ScreenSize } from 'components/constants';
import { FC } from 'react';

const FieldContainer: FC = ({ children }) => {
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIpad);

  return (
    <Box
      sx={{
        width: isLargerThanIphone ? '30rem' : '100%',
        paddingBottom: '2rem',
      }}
    >
      {children}
    </Box>
  );
};

const FlexBox = styled('div')({
  display: 'flex',
});

export { FieldContainer, FlexBox };
