import './App.css'
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection/PricingSecion';
import ThemeProvider from './components/store/ThemeProvider';
function App() {

  return (
    <ThemeProvider>
        <Navbar/>
        <PricingSection/>
    </ThemeProvider>
  )
}

export default App
