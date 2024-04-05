import styles from './styles/WorkWithMeArticle.module.scss';
import { motion, useSpring, useScroll } from 'framer-motion';
import { useRef } from 'react';

function WorkWithMeArticle({ title, parraph }) {
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
		<article className={styles.article} ref={ref}>
			<motion.svg>
				<motion.rect
					strokeLinecap={'round'}
					pathLength='0'
					style={{ pathLength }}
				></motion.rect>
			</motion.svg>
			<div>
				<h2>{title}</h2>
				<p>{parraph}</p>
			</div>
		</article>
	);
}

export default WorkWithMeArticle;
