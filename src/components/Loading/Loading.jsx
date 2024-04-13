import styles from './styles/Loading.module.scss';
import { motion } from 'framer-motion';

const variants = {
	initial: {
		scaleY: 0.5,
		opacity: 0
	},
	animate: {
		scaleY: 1,
		opacity: 1,
		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			duration: 1,
			ease: 'circIn'
		}
	}
};

function Loading() {
	return (
		<motion.div
			transition={{
				staggerChildren: 0.25
			}}
			initial='initial'
			animate='animate'
			className={styles.loading}
		>
			<motion.div variants={variants} className={styles.bar} />
			<motion.div variants={variants} className={styles.bar} />
			<motion.div variants={variants} className={styles.bar} />
			<motion.div variants={variants} className={styles.bar} />
			<motion.div variants={variants} className={styles.bar} />
		</motion.div>
	);
}

export default Loading;
