
type Props = {
    children: React.ReactElement | React.ReactElement[]
    className?: string
}
  
const Content: React.FC<Props> = ({ children, className = '' }: Props) => {
    return (
        <section className={`pt-14 p-7 md:p-14 ${className}`}>{children}</section>
    )
}

export default Content
