import styles from './styles/AboutMe.module.scss';
import { fotoJesus } from '../../images';
import { motion } from 'framer-motion';

const orbitVariants = {
	orbit: {
		rotate: 360,
		pathLength: [0.1, 0.9, 0.1],
		transition: {
			rotate: {
				duration: 20,
				repeat: Infinity,
				ease: 'linear'
			},
			pathLength: {
				duration: 20,
				repeat: Infinity,
				ease: 'linear'
			}
		}
	}
};

function AboutMe() {
	return (
		<section id='aboutMe' className={styles.aboutMeContainer}>
			<div className={styles.aboutMe}>
				<div className={styles.image}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 600 600'
						className={styles.orbit}
					>
						<motion.circle
							stroke='white'
							strokeWidth='15'
							strokeLinecap={'round'}
							fill='none'
							cx='300'
							cy='300'
							r='300'
							variants={orbitVariants}
							animate={'orbit'}
						/>
					</svg>
					<img rel='preload' src={fotoJesus} alt='Foto de Jesús' />
				</div>
				<div className={styles.content}>
					<h1>Sobre mí</h1>
					<p>
						Soy Jesús Paredes, un apasionado desarrollador en proceso de
						titulación, con un enfoque especial en desarrollo web, tanto
						back-end como front-end
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
