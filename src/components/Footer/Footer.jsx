import Container from '../Container/Container';
import styles from './styles/FooterStyled.module.scss';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialVariants = {
	hover: {
		scale: 1.2,
		y: -3,
		transition: {
			duration: 0.3
		}
	}
};

function Footer() {
	return (
		<Container>
			<footer className={styles.footer}>
				<div className={styles.content}>
					<span>Sígueme en mis redes.</span>
					<div className={styles.socialMedia}>
						<motion.a
							href='https://github.com/Kickevnzla'
							rel='noreferrer noopener'
							target='_blank'
							variants={socialVariants}
							whileHover='hover'
							aria-label='Perfil de GitHub'
						>
							<FaGithub />
						</motion.a>
						<motion.a
							href='https://www.linkedin.com/in/jesús-paredes-arnaez-8725841bb'
							rel='noreferrer noopener'
							target='_blank'
							variants={socialVariants}
							whileHover='hover'
							aria-label='Perfil de LinkedIn'
						>
							<FaLinkedin />
						</motion.a>
						<motion.a
							href='https://www.instagram.com/kickevnzla'
							rel='noreferrer noopener'
							target='_blank'
							variants={socialVariants}
							whileHover='hover'
							aria-label='Perfil de Instagram'
						>
							<FaInstagram />
						</motion.a>
					</div>
					<span>
						Diseño y desarrollo por{' '}
						<span className={styles.nombre}>Jesús Paredes.</span>
					</span>
				</div>
				<div className={styles.content}>
					<span>
						Actualmente en: <span>Santiago de Chile.</span>
					</span>
					<span>&copy;2024 Todos Los Derechos Reservados.</span>
				</div>
			</footer>
		</Container>
	);
}

export default Footer;
