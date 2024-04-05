import Container from '../Container/Container';
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
		<Container>
			<section className={styles.experienceContainer}>
				<motion.img
					src={satelite}
					alt='Second planet'
					variants={planetVariants}
					initial='hidden'
					animate='idle'
					style={{ originX: 0.5, originY: 0.5 }}
					className={styles.sateliteMovile}
				/>
				<h1>Experiencia</h1>
				<div className={styles.experience}>
					<div className={styles.content}>
						<div>
							<h2>Desarrollador web</h2>
							<p>
								Desarrollador web autodidacta desde hace 2 años. He trabajado en
								proyectos personales y en proyectos de clientes.
							</p>
						</div>
						<div>
							<h2>Práctica profesional</h2>
							<p>
								Realicé una práctica profesional en una empresa de desarrollo de
								software. Aprendí mucho sobre desarrollo web y trabajo en
								equipo.
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
						/>
					</div>
				</div>
			</section>
		</Container>
	);
}

export default Experience;
