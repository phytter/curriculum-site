
type Props = {
    children: React.ReactElement | React.ReactElement[]
    className?: string
}
  
const Content: React.FC<Props> = ({ children, className = '' }: Props) => {
    return (
        <section className={`p-14 ${className}`}>{children}</section>
    )
}

export default Content
