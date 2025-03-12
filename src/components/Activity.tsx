import NumberFlow, { type Format } from '@number-flow/react'
import clsx from 'clsx'
import { ChartNoAxesColumn, Heart } from 'lucide-react'

const format: Format = {
	notation: 'compact',
	compactDisplay: 'short',
	roundingMode: 'trunc'
}

type Props = {
	likes: number
	views: number
	liked: boolean
	onLike: () => void
}

export default function Activity({
	likes,
	views,
	onLike,
	liked
}: Props) {
	return (
		<div className="~px-0/16 ~text-[0.8125rem]/sm flex w-1/3 select-none items-center text-white">
			<div className="flex flex-1 items-center gap-1.5">
				<ChartNoAxesColumn absoluteStrokeWidth className="~size-4/5" />
				<NumberFlow willChange value={views} format={format} />
			</div>
			<div className="flex-1">
				<button
					className={clsx(
						'group flex items-center gap-1 pr-1.5 transition-[color] hover:text-pink-500',
						liked && 'text-pink-500'
					)}
					onClick={onLike}
				>
					<div className="relative before:absolute before:-inset-2.5 before:rounded-full before:transition-[background-color] before:group-hover:bg-pink-500/10">
						<Heart
							absoluteStrokeWidth
							className={clsx(
								'~size-4/5 group-active:spring-duration-[25] spring-bounce-[65] spring-duration-300 transition-transform group-active:scale-[80%]',
								liked && 'fill-current'
							)}
						/>
					</div>
					<NumberFlow willChange value={likes} format={format} />
				</button>
			</div>
		</div>
	)
}

export { Activity }