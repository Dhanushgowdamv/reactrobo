import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Pricing from './components/pricing'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <div className="pt-[4.2rem] lg:pt-[5.2rem] overflow-hidden">
   <Header/>
   <Hero/>
   <Benefits/>
   <Collaboration/>
   <Services/>
   <Pricing/>
   <Roadmap/>
   <Footer/>
    </div>
    <ButtonGradient/>
    </>
  )
}

export default App
