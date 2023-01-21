type Props = {
	title: string;
	description: string;
	language: string;
	link: string;
};

const Card: React.FC<Props> = ({ title, description, language, link }) => {
	return (
		<a href={link}>
			<div className='flex flex-col p-3 bg-neutral-100 border-neutral-900 dark:bg-neutral-900 border dark:border-neutral-500 rounded shadow-sm hover:shadow-lg duration-300 ease-in-out'>
				<h3 className='font-semibold text-indigo-500 text-lg'>{title}</h3>
				<p className='text-sm'>{description}</p>
				<br />
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>
					{language}
				</p>
			</div>
		</a>
	);
};

export default Card;
