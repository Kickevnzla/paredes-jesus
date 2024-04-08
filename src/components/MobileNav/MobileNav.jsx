import styles from './styles/MobileNav.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const mobileNavVariants = {
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.2,
			ease: 'easeIn'
		}
	},
	hidden: {
		opacity: 0,
		x: 300,
		transition: {
			duration: 0.2,
			ease: 'easeIn'
		}
	}
};

function MobileNav({ links, mobileNavOpen, setMobileNavOpen }) {
	return (
		<AnimatePresence>
			{mobileNavOpen && (
				<motion.div
					variants={mobileNavVariants}
					initial='hidden'
					animate='visible'
					exit='hidden'
					className={styles.mobileNav}
				>
					<IoCloseOutline
						className={styles.closeIcon}
						onClick={() => setMobileNavOpen(false)}
					/>
					<ul>
						{links.map((link, index) => (
							<li key={index}>
								<a
									onClick={() => {
										window.scrollTo({
											top:
												document
													.getElementById(link.link)
													.getBoundingClientRect().top +
												window.scrollY -
												150,
											behavior: 'smooth'
										});

										setMobileNavOpen(false);
									}}
									aria-label={`Link a la sección ${link.text}.`}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default MobileNav;
