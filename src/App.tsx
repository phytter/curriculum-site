import { Header } from "./presentation/components"
import Routes from './main/routes'

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <Routes>
        <Header />
      </Routes>
    </div>
  )
}

export default App
