import FadeInSection from "../components/FadeIn"
import clarksonlogo from '../assets/clarksonlogo.png'
import Project from "../components/Project"
const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col cursor-default font-mono">
      <div className="font-extrabold text-white text-4xl align-middle mx-auto">
        My Work Experience
      </div>
      <FadeInSection>
        <div className="flex flex-col md:flex-row mx-auto align-middle pt-12">
          <div className="md:basis-1/2 text-left">
            <Project link='' Title="Software Intern" Content="At Clarkson Construction, I utilized the SharePoint Framework (SPFx) 
              alongside React to develop custom web parts for an internal SharePoint hub website. Additionally, 
              I established a Django REST framework backend, which facilitates client connections to an Azure App, 
              enabling the web part to make requests to the Microsoft Graph API. To support future deployment, I 
              also personally set up an Azure server to host the Django backend."/>
          </div>
          <div className="md:basis-1/2 justify-center px-20 py-10 align-middle mx-auto">
            <img src={clarksonlogo} alt="clarksonimage" className="rounded-lg size-48 md:size-fit"></img>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="pt-12">
          <iframe width="100%" height='600' className="align-middle mx-auto rounded-xl"
            src="https://www.youtube.com/embed/CMo_lUOr01M">
          </iframe>
        </div>
      </FadeInSection>
    </div>
  )
}
export default Experience