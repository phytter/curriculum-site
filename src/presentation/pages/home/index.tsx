import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Content } from "@/presentation/components"
import ProfilePicture from '@/assets/transparent-profile.png'

const ExperienceInformations = ({ className = '' }) => (
  <div className={className}>
    <span className="p-2 mt-10 inline-flex items-center gap-2 shadow-info">
      <span className="text-amber-400 font-bold text-4xl">5</span>
      <span className="text-slate-300 font-bold text-xs">YEARS<br /> EXPERIENCE</span>
    </span>

    <span className="p-2 mt-10 inline-flex items-center gap-2  shadow-info ml-5">
      <span className="text-amber-400 font-bold text-4xl">+20</span>
      <span className="text-slate-300 font-bold text-xs">PROJECTS<br /> COMPLETED</span>
    </span>
  </div>
)

const Home: React.FC = () => {
  return (
    <Content className="flex-1 flex justify-between flex-col lg:flex-row mt-10">
      <div className="flex flex-col justify-between">
        <div>
          <span className="text-white text-5xl">
            Front-end
          </span>
          <span className="text-amber-400 text-5xl">{' &'} Back-end Developer.</span>
          <div className="text-gray-400 text-xl mt-3 mb-10">
            I develop full apps with development patterns and main technologies.
          </div>
        </div>

        <ExperienceInformations className="hidden lg:block" />
      </div>
      <div className="flex-1 hidden justify-center sm:flex">
        <div className="w-[411.38px] h-[411.38px] bg-zinc-900 rounded-[50%] overflow-hidden inline-flex justify-center relative">
          <a target="_blank" className="z-[2] absolute top-[15px] left-[calc(50%_-_15px)]" href="https://www.linkedin.com/in/alexandre-da-silva-a08b19146">
            <FaLinkedin className="text-white text-3xl bg-zinc-900"/>
          </a>
          <a target="_blank" className="z-[2] absolute bottom-[100px] left-[45px]" href="https://github.com/phytter">
            <FaGithub className="text-white text-3xl bg-zinc-900" />
          </a>
          <div className="border-2 border-amber-400 rounded-[50%] w-[350px] h-[350px] absolute top-[30px] z-[0]">
            <FaWhatsapp className="absolute top-[calc(50%_-_15px)] right-[-15px] text-white text-3xl bg-zinc-900" />
          </div>
          <img src={ProfilePicture} alt="me" className="w-[300px] z-[1] mt-[10px]" />
        </div>
      </div>
      <ExperienceInformations className="lg:hidden flex justify-center" />
    </Content>
  )
}

export default Home
