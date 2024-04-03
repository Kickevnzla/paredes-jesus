import styles from './styles/PlanetSvg.module.scss';
import { motion } from 'framer-motion';

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: {
		pathLength: 1,
		opacity: 1,
		transition: {
			pathLength: { delay: 0.5, type: 'spring', duration: 1.5, bounce: 0 },
			opacity: { delay: 0.5, duration: 0.01 }
		}
	},
	hover: {
		scale: 1.2,
		transition: {
			duration: 0.3
		}
	}
};

function PlanetSvg() {
	return (
		<motion.svg
			xmlns='http://www.w3.org/2000/svg'
			id='Icons'
			version='1.1'
			viewBox='0 0 32 32'
			className={styles.planetSvg}
			initial='hidden'
			animate='visible'
			drag
			dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
			whileTap='hover'
		>
			<motion.circle cx='16' cy='16' r='10' variants={draw} />
			<motion.path
				d='M21.5 7.7c3.7-1.3 6.6-1.3 7.5.1 1.5 2.3-3 7.9-10.2 12.5s-14.1 6.3-15.6 4c-.9-1.4.3-3.8 2.8-6.5'
				variants={draw}
			/>
		</motion.svg>
	);
}

export default PlanetSvg;
