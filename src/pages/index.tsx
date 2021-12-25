// if logged in, show log in or register
// else dashboard
import { DashboardTemplate } from 'components/templates/dashboardTemplate'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <DashboardTemplate />
}

export default Home
