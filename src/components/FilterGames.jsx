import { useState } from 'react'
import games from '../data/games.json'

const allTags = [...new Set(games.flatMap((game) => game.tags))]

export default function GamesContainer() {
	const [filter, setFilter] = useState('All')

	const handleFilterChange = (tag) => {
		setFilter(tag)
	}

	const filteredGames =
		filter === 'All'
			? games
			: games.filter((game) => game.tags.includes(filter))

	return (
		<div className='max-w-screen-2xl mx-auto space-y-m'>
			<div className='p-xs bg-black-500 rounded-lg space-x-2xs flex flex-col md:flex-row gap-s md:gap-2xs md:items-center'>
				<p className='text-cream-200 inline pr-2xs font-bold font-robotoCondensed uppercase'>
					Game Categories:
				</p>
				<div>
					<button
						onClick={() => handleFilterChange('All')}
						className={`${
							filter === 'All'
								? 'bg-cream-200 text-black-400'
								: 'bg-black-500 text-cream-200'
						} px-2xs py-3xs hover:cursor-pointer rounded-sm uppercase`}
					>
						<span className='text-step--2'>All</span>
					</button>
					{allTags.map((tag) => (
						<button
							key={tag}
							onClick={() => handleFilterChange(tag)}
							className={`${
								filter === tag
									? 'bg-cream-200 text-black-400'
									: 'bg-black-500 text-cream-200'
							} px-2xs py-3xs hover:cursor-pointer rounded-sm uppercase`}
						>
							<span className='text-step--2'>{tag}</span>
						</button>
					))}
				</div>
			</div>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-s min-h-96'>
				{filteredGames.map((game) => (
					<li
						key={game.id}
						className='bg-black-500 text-cream-500 rounded-sm overflow-hidden mx-auto'
					>
						<a href={`/${game.id}`} className='inline-block'>
							<img src={game.thumbnail} alt={game.title} />
							<div className='px-2xs py-xs'>
								<p className='space-x-3xs text-right'>
									{game.tags.map((tag) => (
										<span
											key={tag}
											className='bg-yellow-400/80 text-black-500 px-2xs py-3xs text-step--2 rounded-full'
										>
											{tag}
										</span>
									))}
								</p>
								<p className='text-step-0 font-bold font-robotoCondensed uppercase pt-m pb-2xs leading-tight'>
									{game.title}
								</p>
								<p className='font-light text-cream-500/80'>
									{game.description}
								</p>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
