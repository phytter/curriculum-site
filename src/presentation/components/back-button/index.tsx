import { CgArrowLongLeft } from 'react-icons/cg'
  
  const BackButton: React.FC = () => {
    return (
      <button className='text-white font-mono text-xs tracking-widest font-semibold flex gap-5 items-center border-b-2 border-b-amber-500 pl-4 pr-24 hover:opacity-70 mb-5'>
        <CgArrowLongLeft size={20} className="text-amber-500" /> BACK
      </button>
    )
  }
  
  export default BackButton