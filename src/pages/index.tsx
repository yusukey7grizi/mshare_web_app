// if logged in, show log in or register
// else dashboard
import type { NextPage } from 'next'

import { LoginTemplate } from '../components/templates/loginTemplate'

const Home: NextPage = () => {
  return (
    <>
      <LoginTemplate />
    </>
  )
}

export default Home
