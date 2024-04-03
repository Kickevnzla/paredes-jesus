import styles from './styles/NavBarStyled.module.scss';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Container from '../Container/Container';

const HomeNavBar = () => {
	const [hidden, setHidden] = useState(false);

	const { scrollY } = useScroll();

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
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: -100 }
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className={styles.navBarContainer}
		>
			<Container>
				<header>
					<nav className={styles.navBar}>
						<div className={styles.navLogoContainer}>Navbar</div>
					</nav>
				</header>
			</Container>
		</motion.div>
	);
};

export default HomeNavBar;
