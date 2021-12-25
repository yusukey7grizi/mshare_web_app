import { styled } from '@mui/system'

const FlexBox = styled('div')({
  display: 'flex',
})

const SideBarBox = styled('div')({
  width: '240px',
  overflowY: 'hidden',
})

const FormTextFieldContainer = styled('div')({
  marginBottom: '30px',
})

export { FlexBox, SideBarBox, FormTextFieldContainer }
