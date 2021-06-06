import './App.css'
import { ButtonFetch } from './components/Buttons'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <header className="App-header">
          <h1>Learn Graph-QL</h1>
        </header>
        <main>
          <ButtonFetch />
        </main>
      </QueryClientProvider>
    </div>
  )
}

export { App }
