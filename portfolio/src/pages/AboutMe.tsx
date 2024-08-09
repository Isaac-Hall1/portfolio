const AboutMe = () => {
  return (
    <div className="min-h-screen font-mono">
      <div className="font-bold text-white text-4xl md:text-6xl pt-4 pb-8">
        Hello I'm Isaac Hall
      </div>
      <div className="font-bold text-xl md:text-2xl [text-wrap:balance] bg-clip-text text-white">
        I've developed in 
          <span className="text-blue-500 inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className=" animate-text-slide block text-left leading-tight [&_li]:block ml-3">
                <li> Typescript</li>
                <li> Python</li>
                <li> React</li>
                <li> Django</li>
                <li> C++</li>
                <li> C#</li>
                <li> Java</li>
                <li> Tailwind</li>
                <li> HTML/CSS</li>
                <li aria-hidden="true">Typescript</li>
            </ul>
        </span></div>
    </div>
  )
}
export default AboutMe