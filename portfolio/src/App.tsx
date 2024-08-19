import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='text-white relative'>
        <Navbar/>
        <main className="relative flex-col max-w-screen-lg mx-auto pl-2">
          <div id='AboutMeSection' className='scroll-mt-14'>
            <AboutMe/>
          </div>
          <div id='ExperienceSection' className='scroll-mt-20'>
            <Experience/>
          </div>
          <div id='ProjectsSection' className=''>
            <Projects/>
          </div>
          <div id='ContactSection' className='scroll-mt-20'>
            <Contact/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
