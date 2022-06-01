import { Content } from "@/presentation/components"
import ProfilePicture from '@/assets/transparent-profile.png'

const Home: React.FC = () => {
  return (
    <Content>
        <div>
          <h1 className="text-amber-400 font-serif text-2xl mt-4 w-28 relative top-14 left-44 p-2 bg-zinc-800 ">
            Alexandre da Silva
          </h1>

          <img src={ProfilePicture} alt="me" className="w-1/2 bg-zinc-900"/>
        </div>
    </Content>
  )
}

export default Home
