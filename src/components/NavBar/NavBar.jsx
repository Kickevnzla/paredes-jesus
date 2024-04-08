import styles from './styles/NavBarStyled.module.scss';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Container from '../Container/Container';
import PlanetSvg from '../PlanetSvg';
import { RxHamburgerMenu } from 'react-icons/rx';
import DesktopNav from '../DesktopNav';
import MobileNav from '../MobileNav';

const navBarVariants = {
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: 'easeIn' }
	},
	hidden: {
		opacity: 0,
		y: -100,
		transition: { duration: 0.5, ease: 'easeOut' }
	},
	background: {
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		boxShadow:
			'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
		transition: { duration: 0.5, ease: 'easeIn' }
	}
};

function HomeNavBar() {
	const [hidden, setHidden] = useState(false);
	const [transparency, setTransparency] = useState(true);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const { scrollY } = useScroll();

	const links = [
		{ text: 'Sobre mi', link: 'aboutMe' },
		{ text: 'Experiencia', link: 'experience' },
		{ text: 'Trabajemos', link: 'workWithMe' },
		{ text: 'Proyectos', link: 'projects' },
		{ text: 'Contacto', link: 'contact' }
	];

	useMotionValueEvent(scrollY, 'change', latest => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
		if (latest < 50) {
			setTransparency(true);
		} else {
			setTransparency(false);
		}
	});

	return (
		<motion.div
			variants={navBarVariants}
			animate={hidden ? 'hidden' : transparency ? 'visible' : 'background'}
			className={styles.navBarContainer}
		>
			<Container>
				<header>
					<nav className={styles.navBar}>
						<a
							draggable='false'
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: 'smooth'
								});
							}}
						>
							<PlanetSvg />
						</a>
						{!mobileNavOpen && (
							<RxHamburgerMenu
								className={styles.burger}
								onClick={() => {
									setMobileNavOpen(!mobileNavOpen);
								}}
							/>
						)}
						<MobileNav
							links={links}
							mobileNavOpen={mobileNavOpen}
							setMobileNavOpen={setMobileNavOpen}
						/>
						<DesktopNav links={links} />
					</nav>
				</header>
			</Container>
		</motion.div>
	);
}

export default HomeNavBar;
