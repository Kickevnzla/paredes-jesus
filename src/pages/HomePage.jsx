import { HomeLayout } from '../components/Layouts';
import MainBanner from '../components/MainBanner';
import styles from './styles/HomePage.module.scss';

function HomePage() {
	return (
		<>
			<HomeLayout>
				{/* <div className={styles.stars}></div>
				<div className={styles.stars2}></div>
				<div className={styles.stars3}></div> */}
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
				<MainBanner />
			</HomeLayout>
		</>
	);
}

export default HomePage;
