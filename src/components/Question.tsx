import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface QuestionProps {
	question: string
	answer: string
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div>
			<button
				className='w-full text-left flex justify-between items-center focus:outline-none hover:cursor-pointer text-black-500'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className='font-robotoCondensed font-bold text-step-0'>
					{question}
				</span>
				<span className='font-robotoCondensed font-bold text-step-0'>
					{isOpen ? '-' : '+'}
				</span>
			</button>
			{isOpen && (
				<div className='pt-2xs text-black-400 text-step--1 answers'>
					<ReactMarkdown>{answer}</ReactMarkdown>
				</div>
			)}
		</div>
	)
}

export default Question
