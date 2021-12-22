import { Drawer, Box, Divider, Typography } from '@mui/material'
import { DrawerLinkList, DrawerMovieList } from '../../molecules'

const SideBar = () => {
  return (
    <>
      <Drawer anchor="left" open>
        <Box role="presentation" sx={{ width: '240px', overflowY: 'hidden' }}>
          <Typography sx={{ marginTop: '20px' }} align="center" variant="h4">
            MShare
          </Typography>
          <br />
          <Divider />
          <DrawerLinkList />
          <Divider />
          <DrawerMovieList />
        </Box>
      </Drawer>
    </>
  )
}

export { SideBar }
