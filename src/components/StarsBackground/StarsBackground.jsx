import styles from './styles/StarsBackground.module.scss';

function StarsBackground() {
	return (
		<>
			{[...Array(100)].map((_, index) => (
				<svg
					key={index}
					className={styles.star}
					fill='#000000'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z' />
				</svg>
			))}
		</>
	);
}

export default StarsBackground;
