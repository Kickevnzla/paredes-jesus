import styles from './styles/Projects.module.scss';
import {
	carlosComillasScreenshot,
	aycarlitosScreenshot,
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

function Projects() {
	const projects = [
		{
			image: carlosComillasScreenshot,
			title: 'Carlos Comillas',
			description: 'Landing page para un diseñador gráfico.',
			link: 'https://carloscomillas.cl/'
		},
		{
			image: aycarlitosScreenshot,
			title: 'AyCarlitos',
			description: 'Tienda en línea para la venta de juguetes para adultos.',
			link: 'https://aycarlitos.cl/'
		},
		{
			image: paredesJesusScreenshot,
			title: 'Paredes Jesús',
			description: 'Portafolio web para Jesús Paredes.',
			link: 'https://paredesjesus.com/'
		}
	];

	return (
		<section id='projects' className={styles.projectsContainer}>
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
			<div className={styles.projects}>
				{projects.map((project, index) => (
					<article key={index}>
						<div className={styles.image}>
							<img
								draggable='false'
								src={project.image}
								alt={`Screenshot del proyecto ${project.title}.`}
							/>
						</div>
						<div className={styles.content}>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<div>
								<motion.a
									whileHover={{
										color: '#000',
										backgroundColor: '#8eb4ff',
										scale: 1.1,
										transition: { duration: 0.3 }
									}}
									href={project.link}
									rel='noreferrer noopener'
									target='_blank'
								>
									Ver proyecto
								</motion.a>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Projects;
