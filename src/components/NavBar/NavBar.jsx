import styles from './styles/NavBarStyled.module.scss';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Container from '../Container/Container';
import PlanetSvg from '../PlanetSvg';

const navBarVariants = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -100 },
	background: { backgroundColor: 'rgba(255, 255, 255, 0.05)' }
};

const HomeNavBar = () => {
	const [hidden, setHidden] = useState(false);
	const [transparency, setTransparency] = useState(true);

	const { scrollY } = useScroll();

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
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className={styles.navBarContainer}
		>
			<Container>
				<header>
					<nav className={styles.navBar}>
						<a draggable='false' href='#'>
							<PlanetSvg />
						</a>
						<ul>
							<li>
								<a>Sobre mi</a>
							</li>
							<li>
								<a>Experiencia</a>
							</li>
							<li>
								<a>Proyectos</a>
							</li>
							<li>
								<a>Contacto</a>
							</li>
						</ul>
					</nav>
				</header>
			</Container>
		</motion.div>
	);
};

export default HomeNavBar;
