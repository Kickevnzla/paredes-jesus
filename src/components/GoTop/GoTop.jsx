import styles from './styles/GoTop.module.scss';
import { motion } from 'framer-motion';

function GoTop() {
	return (
		<div className={styles.goTop}>
			<motion.button
				whileHover={{
					color: '#000',
					backgroundColor: '#8eb4ff',
					scale: 1.05,
					transition: { duration: 0.3 }
				}}
				onClick={() => {
					window.scrollTo({
						top: 0,
						behavior: 'smooth'
					});
				}}
				aria-label='Link a la parte superior de la página'
			>
				Volver Arriba
			</motion.button>
		</div>
	);
}

export default GoTop;
