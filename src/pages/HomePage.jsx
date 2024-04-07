import styles from './styles/HomePage.module.scss';
import { HomeLayout } from '../components/Layouts';
import MainBanner from '../components/MainBanner';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import WorkWithMe from '../components/WorkWithMe';
import Proyects from '../components/Proyects';
import Contact from '../components/Contact';
import GoTop from '../components/GoTop';

function HomePage() {
	return (
		<>
			<HomeLayout>
				<div>
					{[...Array(150)].map((_, index) => (
						<svg
							key={index}
							className={styles.star}
							fill='#000000'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z' />
						</svg>
					))}
				</div>
				<MainBanner />
				<AboutMe />
				<Experience />
				<WorkWithMe />
				<Proyects />
				<Contact />
				<GoTop />
			</HomeLayout>
		</>
	);
}

export default HomePage;
