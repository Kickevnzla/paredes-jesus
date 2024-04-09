import styles from './styles/NavBarStyled.module.scss';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Container from '../Container/Container';
import { RxHamburgerMenu } from 'react-icons/rx';
import DesktopNav from '../DesktopNav';
import MobileNav from '../MobileNav';
import Logo from '../../images/logo-paredes-jesus.svg?react';

const navBarVariants = {
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: 'easeIn' }
	},
	hidden: {
		opacity: 0,
		backgroundColor: 'rgba(0, 0, 0, 0)',
		y: -100,
		transition: { duration: 0.5, ease: 'easeOut' }
	}
};

function HomeNavBar() {
	const [hidden, setHidden] = useState(false);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const { scrollY } = useScroll();

	const links = [
		{ text: 'Sobre mí', link: 'aboutMe' },
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
	});

	return (
		<motion.div
			variants={navBarVariants}
			initial='visible'
			animate={hidden ? 'hidden' : 'visible'}
			className={styles.navBarContainer}
		>
			<Container>
				<header>
					<nav className={styles.navBar}>
						<motion.a
							draggable='false'
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: 'smooth'
								});
							}}
							className={styles.logo}
							whileHover={{ scale: 1.1 }}
						>
							<Logo />
						</motion.a>
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
