import FadeInSection from "../components/FadeIn"
import Project from "../components/Project"
import blogsite from '../assets/blogsite.png'
import twitter from '../assets/twitter.png'

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col cursor-default font-mono pt-20">
      <div className="font-extrabold text-white text-4xl align-middle mx-auto">
        My Personal Projects
      </div>
      <FadeInSection>
        <div className="flex flex-col md:flex-row mx-auto align-middle pt-12">
          <div className="md:basis-1/2">
            <Project link='https://github.com/Isaac-Hall1/blogsite' Title="Blogsite" Content="Utilized a React.ts + Vite front-end and a Django Rest Framework back-end to 
            create a website where users can log in or register accounts, create blog posts, view and vote on other users' 
            blog posts, and comment on specific blog posts. From this project I learned how to create a REST API, how to authenticate
            users using JWT, and creating an interactive yet simple front-end with tailwind."/>
          </div>
          <div className="md:basis-1/2 flex justify-center items-center">
            <img src={blogsite} alt="clarksonimage" className="rounded-lg size-48 md:size-fit"></img>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="flex flex-col md:flex-row mx-auto align-middle pt-28">
          <div className="md:basis-1/2 flex justify-center items-center">
            <iframe width="80%" height='80%' className="rounded-xl"
              src="https://www.youtube.com/embed/ZHUQc9RAz2E">
            </iframe>
          </div>
          <div className="md:basis-1/2">
            <Project  link='https://github.com/Isaac-Hall1/BlackjackGame' Title="Blackjack App" Content="In this class project, my team of six and I developed an interactive Blackjack app using C++ and Qt,
             aimed at teaching our peers how to play Blackjack. During the three-week sprint, I took on the primary role of implementing the game's logic
             and provided support in designing the user interface as needed. This project highlighted the importance of thorough planning before diving into coding. 
             Due to insufficient planning, I had to invest extra time and effort to address issues that could have been avoided. This experience has reinforced the 
             necessity of careful preparation in future projects."/>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="flex flex-col md:flex-row mx-auto align-middle pt-28">
          <div className="md:basis-1/2">
            <Project  link='https://github.com/Isaac-Hall1/SpriteEditor' Title="Sprite Editor" Content="In this class project, my team of six and I developed a sprite editor using C++ and Qt.
             My contributions focused on implementing the animation functionality and enabling users to add, delete, and duplicate frames.
             Through this project, I gained valuable experience in collaborative development,learning the importance of compromise and when
             to step up and take on additional responsibilities to ensure the success of the team."/>
          </div>
          <div className="md:basis-1/2 flex justify-center items-center">
            <iframe width="80%" height='80%' className="rounded-xl"
              src="https://www.youtube.com/embed/6__YZDYZKEs">
            </iframe>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="flex flex-col md:flex-row mx-auto align-middle pt-28 pb-36">
          <div className="md:basis-1/2 flex justify-center items-center p-10">
            <img src={twitter} alt="clarksonimage" className="rounded-lg size-48 md:size-fit"></img>
          </div>
          <div className="md:basis-1/2">
            <Project  link='https://github.com/Isaac-Hall1/TwitterBot' Title="Twitter Bot" Content="For this project I created a Twitter bot that scraped Twitch.tv using selenium for 24 hours every
             day to determine who were the top three streamers that day and once a day at midnight posted,
             depending on my own algorithm for determining the tops streamers, the top three streamers to a
             Twitter account."/>
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}
export default Projects