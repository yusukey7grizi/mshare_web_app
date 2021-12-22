// if logged in, show log in or register
// else dashboard

import type { NextPage } from 'next'
import { SideBar } from '../components/organisms/sideBar'

const Home: NextPage = () => {
  return <SideBar />
}

export default Home
