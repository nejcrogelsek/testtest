import Navbar from 'components/partials/Navbar/Navbar'
import LoadingProvider from 'components/providers/LoadingProvider/LoadingProvider'
import { FC } from 'react'
import Routes from 'routes/Routes'

const App: FC = () => {
  return (
    <LoadingProvider>
      <Navbar />
      <Routes />
    </LoadingProvider>
  )
}

export default App
