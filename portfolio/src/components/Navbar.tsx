const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth'});
  }
  return (
    <nav className="sticky top-0 w-full block z-10 pt-4 pb-4 border-b-[.5px] border-white bg-black ">
      <div style={{position: 'relative'}} className="flex flex-row max-w-screen-xl mx-auto justify-center font-bold cursor-default">
        <div className="basis-10/12 pl-2">
          <span className="hover:cursor-pointer hover:text-blue-500" onClick={() => scrollToSection('AboutMeSection')}>Isaac Hall</span>
        </div>
        <div className="flex flex-row basis-2/12">
          <div className="pr-2 pl-2">
            <p className="hover:cursor-pointer hover:text-blue-500" onClick={() => scrollToSection('ExperienceSection')}>Experience</p>
          </div>
          <div className="pr-2 pl-2">
            <p className="hover:cursor-pointer hover:text-blue-500" onClick={() => scrollToSection('ProjectsSection')}>Projects</p>
          </div>
          <div className="pr-2 pl-2">
            <p className="hover:cursor-pointer hover:text-blue-500" onClick={() => scrollToSection('ContactSection')}>Contact</p>
          </div>
        </div>
      </div>
    </nav>
);
}
export default Navbar