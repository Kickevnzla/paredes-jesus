import WorkWithMeArticle from '../WorkWithMeArticle';
import styles from './styles/WorkWithMe.module.scss';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

function WorkWithMe() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 50vh', 'end 50vh']
	});

	const pathLength = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	return (
		<section id='workWithMe' className={styles.workWithMeContainer}>
			<h1>Trabaja conmigo</h1>
			<div className={styles.workWithMe}>
				<div ref={ref} className={styles.steps}>
					<div className={styles.separator}>
						<svg>
							<motion.line
								x1='50%'
								y1='0'
								x2='50%'
								y2='100%'
								stroke='white'
								strokeWidth={3}
								strokeLinecap={'round'}
								pathLength='0'
								style={{ pathLength }}
							/>
						</svg>
					</div>
					<WorkWithMeArticle
						title='Desarrollador de aplicaciones móviles'
						parraph='Desarrollador de aplicaciones móviles con React Native. He
									realizado aplicaciones móviles para Android y iOS.'
					/>
					<WorkWithMeArticle
						title='Desarrollador de aplicaciones móviles'
						parraph='Desarrollador de aplicaciones móviles con React Native. He
									realizado aplicaciones móviles para Android y iOS.'
					/>
					<WorkWithMeArticle
						title='Desarrollador de aplicaciones móviles'
						parraph='Desarrollador de aplicaciones móviles con React Native. He
									realizado aplicaciones móviles para Android y iOS.'
					/>
					<WorkWithMeArticle
						title='Desarrollador de aplicaciones móviles'
						parraph='Desarrollador de aplicaciones móviles con React Native. He
									realizado aplicaciones móviles para Android y iOS.'
					/>
				</div>
			</div>
		</section>
	);
}

export default WorkWithMe;
