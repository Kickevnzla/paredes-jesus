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
					<img src={fotoJesus} alt='Foto de Jesús' />
				</div>
				<div className={styles.content}>
					<h1>Sobre mi</h1>
					<p>
						Soy un desarrollador web autodidacta, apasionado por la tecnología y
						la programación. Me encanta aprender cosas nuevas y compartir
						conocimientos con los demás.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
