import styles from './styles/Experience.module.scss';
import { satelite } from '../../images';
import { motion } from 'framer-motion';

const planetVariants = {
	hidden: {
		opacity: 0,
		filter: 'blur(10px)'
	},
	idle: {
		opacity: 1,
		scale: 1.03,
		rotate: [0, 10, 0],
		filter: 'blur(0px) contrast(1.3)',
		transition: {
			opacity: { duration: 0.2 },
			scale: { duration: 4, repeat: Infinity, repeatType: 'reverse' },
			filter: { duration: 1 },
			rotate: { duration: 5, repeat: Infinity, repeatType: 'reverse' }
		}
	}
};

function Experience() {
	return (
		<section id='experience' className={styles.experienceContainer}>
			<motion.img
				src={satelite}
				alt='Second planet'
				variants={planetVariants}
				initial='hidden'
				animate='idle'
				style={{ originX: 0.5, originY: 0.5 }}
				className={styles.sateliteMovile}
				rel='preload'
			/>
			<h1>Experiencia</h1>
			<div className={styles.experience}>
				<div className={styles.content}>
					<div>
						<h2>Desarrollador web full stack</h2>
						<h3>WOM S.A.</h3>
						<p>
							Diseño e implementación de nuevas funciones para el portal de
							autoservicio Mi WOM (front-end y back-end).
						</p>
					</div>
					<div>
						<h2>Práctica profesional</h2>
						<h3>WOM S.A.</h3>
						<p>
							Desarrollo de nuevas funciones para el portal de autoservicio Mi
							WOM (back-end).
						</p>
					</div>
				</div>
				<div className={styles.image}>
					<motion.img
						src={satelite}
						alt='Second planet'
						variants={planetVariants}
						initial='hidden'
						animate='idle'
						style={{ originX: 0.5, originY: 0.5 }}
						rel='preload'
					/>
				</div>
			</div>
		</section>
	);
}

export default Experience;
