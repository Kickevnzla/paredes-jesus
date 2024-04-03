import Container from '../Container/Container';
import styles from './styles/MainBanner.module.scss';
import { floatingAstronaut, planet } from '../../images';
import { motion } from 'framer-motion';
import { useScramble } from 'use-scramble';
import { useEffect } from 'react';

const astronautVariants = {
	hidden: {
		y: -20,
		x: -20,
		opacity: 0
	},
	idle: {
		y: -40,
		x: -40,
		opacity: 1,
		scale: 1.05,
		transition: {
			duration: 3,
			x: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
			y: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
			scale: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
			opacity: { duration: 3 }
		}
	}
};

function MainBanner() {
	useEffect(() => {
		const interval = setInterval(() => {
			replay();
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const { ref, replay } = useScramble({
		text: 'Soy un apacionado programador, con un enfoque especial en el desarrollo web.',
		characters: 'lowercase',
		speed: 1,
		tick: 1.5,
		step: 6,
		scramble: 34,
		seed: 2,
		chance: 1,
		overflow: true,
		overdrive: false,
		delimiter: ' '
	});

	return (
		<section>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h1>Jesús Paredes</h1>
						<p ref={ref} />
					</div>
					<motion.div
						initial='hidden'
						animate='idle'
						variants={astronautVariants}
						className={styles.image}
					>
						<img src={floatingAstronaut} alt='Main Banner' />
					</motion.div>
					<img src={planet} alt='Planet image' className={styles.planet} />
				</div>
			</Container>
		</section>
	);
}

export default MainBanner;
