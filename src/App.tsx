import {useState} from 'react'
import Banner from "./components/Banner"
import BlogSection from "./components/BlogSection"
import Category from "./components/Category"
import Feature from "./components/Feature"
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MobileNavbar from "./components/MobileNavbar"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"
import { CartContextProvider } from "./context/cartContext"
import Cart from './components/Cart'
import Menu from './components/Menu'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [showCart, setShowCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  return (
    <CartContextProvider>
      <ToastContainer className="mt-20"/>
      <main>
        <Navbar setShowCart={setShowCart}/>
        <MobileNavbar setShowCart={setShowCart} setShowMenu={setShowMenu}/>
        <Hero />
        <Category />
        <FeatureSectionFruits />
        <FeatureSectionBreakfast />
        <Banner />
        <BlogSection />
        <NewsLetter />
        <Feature />
        <Footer />
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
        {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>}
      </main>
    </CartContextProvider>
  )
}

export default App