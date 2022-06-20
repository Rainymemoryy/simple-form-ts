import ScrollButton from './component/CreateTemplate/ScrollToTop'
import RoutesApp from './Routes'

function App() {
  return (
    <div className='App text-grey-900 relative h-screen max-h-screen scroll-smooth'>
      <RoutesApp />
      <ScrollButton />
    </div>
  )
}

export default App
