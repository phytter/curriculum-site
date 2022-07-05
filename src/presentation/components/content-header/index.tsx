import BackButton from "../back-button"

const ContentHeader= ({ title = '' }) => {
    return (
			<div className="flex justify-between mb-10 items-baseline">
				<BackButton />
				<h1 className="text-zinc-700	text-4xl sm:text-5xl font-bold md:pr-20">
					{title}
				</h1>
			</div>
    )
}

export default ContentHeader
