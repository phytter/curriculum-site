import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { GiBrazilFlag } from 'react-icons/gi'
import { Content, ContentHeader } from "@/presentation/components"

function Contact() {

  return (
    <Content className="flex flex-col min-h-[calc(80vh_-_32px_-_1.25rem)]">
      <ContentHeader title="contact" />
      <div className="flex flex-col md:flex-row flex-wrap items-center md:items-stretch sm:gap-4">
        <div className="flex flex-col justify-center">
          {/* <p className="text-gray-400 text-xs font-mono tracking-widest">FRONT-END DEVELOPER / BACK-END DEVELOPER</p> */}
          <h1 className="text-amber-400 font-serif text-5xl mt-4">Alexandre da Silva</h1>
          <div className="flex gap-3 text-white mt-3">
            <a target="_blank" href="https://www.linkedin.com/in/alexandre-da-silva-a08b19146">
              <FaLinkedin size={20} />
            </a>
            <a target="_blank" href="https://wa.me/556499372303">
              <FaWhatsapp size={20} />
            </a>
          </div>

          <div className="mt-10 text-lg text-slate-300">
            <span className="text-gray-400 text-xl">E-mail:</span> phytter@hotmail.com
          </div>
          <div className="mt-3 text-lg text-slate-300">
            <span className="text-gray-400 text-xl">Phone number:</span> +55 (64) 9 9937-2303
          </div>
          <div className="mt-3 text-lg text-slate-300 flex gap-3 items-center">
            <span className="text-gray-400 text-xl">Location:</span> Brazil <GiBrazilFlag color="#009c3b" size="30px" />
          </div>
        </div>
      </div>
    </Content>
  )
}

export default Contact
