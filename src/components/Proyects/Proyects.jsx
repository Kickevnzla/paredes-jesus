import styles from './styles/Proyects.module.scss';
import {
	carlosComillasScreenshot,
	ayCarlitosScreenshot,
	paredesJesusScreenshot,
	planet2
} from '../../images';
import { motion } from 'framer-motion';

const planetVariants = {
	hidden: {
		opacity: 0,
		filter: 'blur(10px)'
	},
	idle: {
		opacity: 1,
		scale: 1.03,
		filter: 'blur(0px) contrast(1.3)',
		transition: {
			duration: 1,
			opacity: { duration: 0.2 },
			scale: { duration: 4, repeat: Infinity, repeatType: 'reverse' },
			filter: { duration: 1 }
		}
	}
};

function Proyects() {
	return (
		<section id='proyects' className={styles.proyectsContainer}>
			<motion.img
				src={planet2}
				alt='Second planet'
				variants={planetVariants}
				initial='hidden'
				animate='idle'
				style={{ originX: 0.5, originY: 0.5 }}
				className={styles.planet}
			/>
			<h1>Proyectos</h1>
			<div className={styles.proyects}>
				<article>
					<div className={styles.image}>
						<img
							draggable='false'
							src={carlosComillasScreenshot}
							alt='Screenshot del proyecto Carlos Comillas.'
						/>
					</div>
					<div className={styles.content}>
						<h2>Proyecto 1</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<motion.a
							whileHover={{
								color: '#000',
								backgroundColor: '#8eb4ff',
								scale: 1.1,
								transition: { duration: 0.3 }
							}}
							href='#'
							rel='noreferrer noopener'
							target='_blank'
						>
							Ver proyecto
						</motion.a>
					</div>
				</article>
				<article>
					<div className={styles.image}>
						<img
							draggable='false'
							src={ayCarlitosScreenshot}
							alt='Screenshot del proyecto Carlos Comillas.'
						/>
					</div>
					<div className={styles.content}>
						<h2>Proyecto 1</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<motion.a
							whileHover={{
								color: '#000',
								backgroundColor: '#8eb4ff',
								scale: 1.1,
								transition: { duration: 0.3 }
							}}
							href='#'
							rel='noreferrer noopener'
							target='_blank'
						>
							Ver proyecto
						</motion.a>
					</div>
				</article>
				<article>
					<div className={styles.image}>
						<img
							draggable='false'
							src={paredesJesusScreenshot}
							alt='Screenshot del proyecto Carlos Comillas.'
						/>
					</div>
					<div className={styles.content}>
						<h2>Proyecto 1</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<motion.a
							whileHover={{
								color: '#000',
								backgroundColor: '#8eb4ff',
								scale: 1.1,
								transition: { duration: 0.3 }
							}}
							href='#'
							rel='noreferrer noopener'
							target='_blank'
						>
							Ver proyecto
						</motion.a>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Proyects;
