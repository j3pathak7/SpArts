import Navbar from './components/navbar/Navbar'
import './App.css'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'

function App() {
  

  return (
    <>
      <div className="min-h-screen mx-0 px-0">
      <Navbar />
      <div className="flex">
        {/* Menu component with fixed width (e.g., w-1/4) */}
        <div className="w-1/5 text-white">
          <Menu />
        </div>
        {/* Home component takes the remaining space */}
        <div className="flex-1">
          <Home />
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
