import styles from './styles/WorkWithMeArticle.module.scss';
import { motion, useSpring, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function WorkWithMeArticle({ title, parraph }) {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start center', 'end center']
	});

	const pathLength = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	const stroke = useTransform(
		scrollYProgress,
		[0, 0.8, 1],
		['#fff', '#fff', '#8EB4FF']
	);

	return (
		<article className={styles.article} ref={ref}>
			<div className={styles.container}>
				<motion.svg viewBox='0 0 200 100'>
					<motion.path
						strokeLinecap={'round'}
						pathLength='0'
						style={{ pathLength, stroke }}
						d='M 10 0 h180 a10,10 0 0 1 10,10 v80 a10, 10 0 0 1 -10,10 h-180 a10,10 0 0 1 -10,-10 v-80 a10,10 0 0 1 10,-10 z'
					></motion.path>
				</motion.svg>
				<div>
					<h2>{title}</h2>
					<p>{parraph}</p>
				</div>
			</div>
		</article>
	);
}

export default WorkWithMeArticle;
