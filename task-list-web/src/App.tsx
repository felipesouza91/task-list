import Home from './pages/Home'
import { PrimeReactProvider } from 'primereact/api';
function App() {
  return (
    <PrimeReactProvider>
      <Home />
    </PrimeReactProvider>
  )
}

export default App
