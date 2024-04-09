import styles from './styles/DesktopNav.module.scss';
import { motion } from 'framer-motion';

function DesktopNav({ links }) {
	return (
		<ul className={styles.desktopNav}>
			{links.map((link, index) => (
				<li key={index}>
					<motion.a
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
						aria-label={`Link a la sección ${link.text}.`}
					>
						{link.text}
					</motion.a>
				</li>
			))}
		</ul>
	);
}

export default DesktopNav;
