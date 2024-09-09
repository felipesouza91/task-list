import { PrimeReactProvider } from 'primereact/api';
import AppRouter from './router/app.router';
function App() {
  return (
    <PrimeReactProvider>
      <AppRouter />
    </PrimeReactProvider>
  )
}

export default App
