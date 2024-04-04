import styles from './styles/NavBarStyled.module.scss';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Container from '../Container/Container';
import PlanetSvg from '../PlanetSvg';

const navBarVariants = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -100 },
	background: {
		backdropFilter: 'blur(10px)',
		boxShadow:
			'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
	},
	transition: {
		visible: { duration: 0.5, ease: 'easeIn' },
		hidden: { duration: 0.5, ease: 'easeIn' },
		background: { duration: 0.5, ease: 'easeIn' }
	}
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
