import { useScramble } from "use-scramble";
const AboutMe = () => {
  const {ref} = useScramble({
    text: `I’m currently a Junior at the University of Utah, majoring in Computer Science. My passions lie in web and software development, 
    and I've worked on several projects (shown below) that highlight these interests. Outside of programming, I enjoy climbing, spending time 
    with friends, and working on personal projects that fuel my creativity.`,
    range: [65,125],
    speed: 1,
    tick: 1,
    step: 5,
    scramble: 75,
    seed: 2,
    chance: 1,
    overdrive: false,
    overflow: true,
  })
  
  return (
    <div className="min-h-screen font-mono flex flex-col justify-center pb-64 cursor-default">
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
          </span>
        </div>
        <div className="py-8 text-gray-500">
          <span ref={ref}/>
        </div>
    </div>
  )
}
export default AboutMe