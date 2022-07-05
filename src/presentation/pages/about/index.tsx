import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Content, ContentHeader } from "@/presentation/components"
import ProfilePicture from '@/assets/profile-picture.jpg'

type InformationBoxProps = {
  skills: string[],
  title: string,
  className: string
}

const InfomationBox = (props: InformationBoxProps) => {
  return (
    <div className={`xl:relative ${props.className}`}>
      <h3 className="text-gray-500 font-mono font-semibold tracking-widest mb-7 text-xs">{props.title}</h3>
      <div className="flex flex-col gap-3 lg:pl-10 text-slate-300 font-bold text-sm">
        {props.skills.map(skill => (<p>{skill}</p>))}
      </div>
    </div>
  )
}

function About() {

  return (
    <Content className="flex flex-col min-h-[calc(80vh_-_32px_-_1.25rem)]">
      <ContentHeader title="about" />
      <div className="flex-1 flex flex-col md:flex-row flex-wrap justify-center items-center md:items-stretch  md:justify-around sm:gap-4">
        <div className="flex flex-col justify-center">
          <p className="text-gray-400 text-xs font-mono tracking-widest">FRONT-END DEVELOPER / BACK-END DEVELOPER</p>
          <h1 className="text-amber-400 font-serif text-5xl mt-4">Alexandre da Silva</h1>
          <div className="flex gap-3 text-white mt-3">
            <a target="_blank" href="https://github.com/phytter">
              <FaGithub size={20} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/alexandre-da-silva-a08b19146">
              <FaLinkedin size={20} />
            </a>
            <a target="_blank" href="https://wa.me/556499372303">
              <FaWhatsapp size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-5 w-72 mb-14">
            Since my childhood i love the world of thechnology and because of that i joined the computer science course, where i had my first contact with programming and since then i never stopped. My focus is develop modern and fast web systems.
          </p>

          <a href="#" className="block sm:inline mb-5 sm:mb-0 font-mono mt-5 text-amber-400 text-xs tracking-widest py-1 px-1 border-2 border-amber-500 text-center">
            VIEW MY CV
          </a>

          <div className="rounded-full mt-6 ml-3 w-4 bg-amber-400 h-4 hidden md:block" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="xl:-mt-20">
            <img src={ProfilePicture} alt="me" className="w-72 shadow-3xl" />
          </div>
        </div>
        
        <div className="flex flex-row justify-around mt-10 lg:mt-5 w-full overflow-hidden xl:w-fit">
          <InfomationBox className="top-2/3" title="IMPROVING" skills={['Mobile development', 'Artificial Intelligence']} />
          <InfomationBox className="top-1/3" title="SKILLS" skills={['Front-end development', 'Back-end development']} />
          <InfomationBox className="top-10" title="TECNOLOGIES" skills={['ReactJs', 'NodeJs', 'Python', 'MongoDB']} />
        </div>
      </div>
    </Content>
  )
}

export default About
