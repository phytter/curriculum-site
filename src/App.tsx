import { FaGithub, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'
import { Header, BackButton, Content } from "./presentation/components"
import ProfilePicture from './assets/profile-picture.jpg'

type InformationBoxProps = {
  skills: string[],
  title: string,
  className: string
}

const InfomationBox = (props: InformationBoxProps) => {
  return (
    <div className={`relative ${props.className}`}>
      <h3 className="text-gray-500 font-mono font-semibold tracking-widest mb-7 text-xs">{props.title}</h3>
      <div className="flex flex-col gap-3 pl-10 text-slate-300 font-bold text-sm">
        {props.skills.map(skill => (<p>{skill}</p>))}
      </div>
    </div>
  )
}

function App() {

  return (
    <div className="bg-zinc-800 min-h-screen">
      <Header />
      <Content className="">
        <div className="flex justify-between mb-10">
          <BackButton />
          <h1 className="text-zinc-700	text-5xl font-bold pr-20">
            about
          </h1>
        </div>
        <div className="flex flex-row flex-wrap justify-between">
          <div className="pl-5">
            <p className="text-gray-400 text-xs font-mono tracking-widest">WEB DEVELOPER / BACK-END DEVELOPER</p>
            <h1 className="text-amber-400 font-serif text-5xl mt-4">Alexandre</h1>
            <div className="flex gap-3 text-white mt-5">
              <FaGithub />  <FaLinkedin /> <FaFacebookSquare />
            </div>
            <p className="text-gray-500 text-sm mt-5 w-72 mb-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra eros ac quam porta porta. Cras id arcu facilisis, volutpat lacus sed, vulputate dolor. Donec viverra tortor id quam aliquet, ultricies interdum dui rhoncus. 
            </p>

            <a href="#" className="font-mono mt-5 text-amber-400 text-xs tracking-widest py-px px-1 border-2 border-amber-500">VIEW MY CV</a>

            <div className="rounded-full mt-6 ml-3 w-4 bg-amber-400 h-4" />
          </div>
          <div>
            <div className="inline-block shadow-3xl -mt-20">
              <img src={ProfilePicture} alt="me" className="w-56 clip-profile profile-shadow" />
            </div>
          </div>
          
          <div className="flex flex-row justify-center">
            <InfomationBox className="top-2/3" title="IMPROVING" skills={['Mobile development', 'Artificial Intelligence']} />
            <InfomationBox className="top-1/3" title="SKILLS" skills={['Front-end development', 'Back end development']} />
            <InfomationBox className="top-0" title="TECNOLOGIES" skills={['ReactJs', 'NodeJs', 'Python', 'MongoDB']} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default App
