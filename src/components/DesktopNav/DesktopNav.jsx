import styles from './styles/DesktopNav.module.scss';
import { motion } from 'framer-motion';

function DesktopNav({ links }) {
	return (
		<ul className={styles.desktopNav}>
			{links.map((link, index) => (
				<li key={index}>
					<motion.span
						whileHover={{ scale: 1.1, color: '#8eb4ff' }}
						transition={{ duration: 0.2 }}
						onClick={() => {
							window.scrollTo({
								top:
									document.getElementById(link.link).getBoundingClientRect()
										.top +
									window.scrollY -
									150,
								behavior: 'smooth'
							});
						}}
					>
						{link.text}
					</motion.span>
				</li>
			))}
		</ul>
	);
}

export default DesktopNav;
