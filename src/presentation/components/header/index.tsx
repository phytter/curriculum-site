import { Link, useLocation } from "react-router-dom"

type MenuHeaderProps = {
  title: string
  path: string
}

const MenuHeader: React.FC<MenuHeaderProps> = (props: MenuHeaderProps) => {
  const location = useLocation()
  const isActive = location.pathname === props.path

  return (
    <Link to={props.path}>
      <span className={`text-${isActive ? 'amber-400' : 'white'} uppercase font-mono font-semibold`}>
        {props.title}
      </span>
    </Link>
  )
}

const Header: React.FC = () => {
  return (
    <header className="pt-5 flex justify-between items-center">
      <div className="h-8 w-3 bg-amber-400" />
      <div className="flex justify-end gap-10 sm:gap-20 tracking-widest items-baseline text-xs">
        <MenuHeader path="/" title="Welcome" />
        <MenuHeader path="/about" title="About" />
        <Link to="/contact">
          <span className="text-white uppercase font- font-semibold bg-amber-400 pl-10 py-2 pr-12 clip-about">
            Contact
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header