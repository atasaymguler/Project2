
import Asidebar from './components/Asidebar'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='flex'>
     <Asidebar />
     <div className='flex-1'>
     <Navbar />
     </div>
    
    </div>
  )
}

export default App
