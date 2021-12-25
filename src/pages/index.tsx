// if logged in, show log in or register
// else dashboard
import { Dashboard } from 'components/templates/dashboard'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <Dashboard />
}

export default Home
