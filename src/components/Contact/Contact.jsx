import styles from './styles/Contact.module.scss';
import { motion } from 'framer-motion';

function Contact() {
	return (
		<section id='contact' className={styles.contactContainer}>
			<h1>Contactame</h1>
			<div className={styles.contact}>
				<div className={styles.left}>
					<h2>Si tienes un proyecto en mente</h2>
					<p>
						¡No dudes en contactarme! Estoy disponible para trabajar en
						proyectos de desarrollo web.
					</p>
					<h2>Información de Contacto</h2>
					<p>
						<strong>Correo:</strong>
						<a href='mailto:jesus@gmail.com'>jesus@gmail.com</a>
					</p>
				</div>
				<div className={styles.right}>
					<form>
						<label htmlFor='name'>Nombre</label>
						<input
							type='text'
							id='name'
							name='name'
							placeholder='Jesús Paredes'
						/>
						<label htmlFor='phone'>Teléfono</label>
						<input
							type='phone'
							id='phone'
							name='phone'
							placeholder='+56 9 1234 5678'
						/>
						<label htmlFor='email'>Correo</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='jesus.paredes@mayor.cl'
						/>
						<label htmlFor='message'>Mensaje</label>
						<textarea
							id='message'
							name='message'
							placeholder='Cuentame de tu proyecto...'
							rows={6}
						></textarea>
						<motion.button
							whileHover={{
								color: '#000',
								backgroundColor: '#8eb4ff',
								scale: 1.05,
								transition: { duration: 0.3 }
							}}
							type='submit'
						>
							Enviar Formulario
						</motion.button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
