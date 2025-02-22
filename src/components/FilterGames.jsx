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
			<div className='pt-s border-b-2 border-cream-200 font-kode'>
				<p className='text-cream-200 inline pr-s text-step--1 font-bold'>
					Categories:
				</p>
				<button
					onClick={() => handleFilterChange('All')}
					className={`mr-2xs mb-2xs ${
						filter === 'All'
							? 'bg-cream-200 text-black-400'
							: 'bg-black-200 text-cream-200'
					} px-2xs py-3xs hover:cursor-pointer`}
				>
					All
				</button>
				{allTags.map((tag) => (
					<button
						key={tag}
						onClick={() => handleFilterChange(tag)}
						className={`mr-2xs mb-2xs ${
							filter === tag
								? 'bg-cream-200 text-black-400'
								: 'bg-black-200 text-cream-200'
						} px-2xs py-3xs hover:cursor-pointer`}
					>
						{tag}
					</button>
				))}
			</div>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-s'>
				{filteredGames.map((game) => (
					<li
						key={game.id}
						className='bg-black-100 text-cream-200 border-b-2 border-inherit'
					>
						<a
							href={`/${game.id}`}
							className='inline-block p-2xs space-y-2xs'
						>
							<img src={game.thumbnail} alt={game.title} />
							<p className='space-x-2xs text-right'>
								{game.tags.map((tag) => (
									<span
										key={tag}
										className='bg-black-200 px-2xs py-3xs text-step--2 font-normal'
									>
										{tag}
									</span>
								))}
							</p>
							<p className=' text-step-0 font-bold pt-2xs leading-tight'>
								{game.title}
							</p>
							<p className='font-kode'>{game.description}</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
