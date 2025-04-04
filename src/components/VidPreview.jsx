import { useRef } from 'react'

const PreviewVideo = ({ game }) => {
	const videoRef = useRef(null)

	const handleMouseEnter = () => {
		if (videoRef.current) {
			videoRef.current.play()
		}
	}

	const handleMouseLeave = () => {
		if (videoRef.current) {
			videoRef.current.pause()
			videoRef.current.currentTime = 0
		}
	}

	return (
		<video
			ref={videoRef}
			id='previewVideo'
			className='transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-80'
			muted
			loop
			poster={game.thumbnail}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<source src={game.video} type='video/mp4' />
			Your browser does not support the video tag.
		</video>
	)
}

export default PreviewVideo
