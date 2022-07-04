import { Link } from "react-router-dom"

type MenuHeaderProps = {
  title: string
}

const MenuHeader: React.FC<MenuHeaderProps> = (props: MenuHeaderProps) => {
  return (
    <span className="text-white uppercase font-mono font-semibold">
      {props.title}
    </span>
  )
}

const Header: React.FC = () => {
  return (
    <header className="pt-5 flex justify-between items-center">
      <div className="h-8 w-3 bg-amber-400" />
      <div className="flex justify-end gap-10 sm:gap-20 tracking-widest items-baseline text-xs">
        <Link to="/">
          <MenuHeader title="Welcome" />
        </Link>
        <MenuHeader title="Work" />
        <MenuHeader title="About" />
        <span className="text-white uppercase font- font-semibold bg-amber-400 pl-10 py-2 pr-12 clip-about">
          Contact
        </span>
      </div>
    </header>
  )
}

export default Header