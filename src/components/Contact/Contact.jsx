import styles from './styles/Contact.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
	const form = useRef();
	const [captcha, setCaptcha] = useState(false);
	const [missingCaptcha, setMissingCaptcha] = useState(false);

	const sendEmail = e => {
		e.preventDefault();

		if (!captcha) {
			setMissingCaptcha(true);
			return;
		}
		setMissingCaptcha(false);
		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE,
				import.meta.env.VITE_EMAILJS_TEMPLATE,
				form.current,
				{
					publicKey: import.meta.env.VITE_EMAILJS_KEY
				}
			)
			.then(
				() => {
					console.log('SUCCESS!');
					form.current.reset();
				},
				error => {
					console.log('FAILED...', error.text);
				}
			);
	};

	const handleCaptcha = value => {
		setMissingCaptcha(false);
		value ? setCaptcha(true) : setCaptcha(false);
	};

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
						<strong>Correo: </strong>
						<a href='mailto:contact@paredesjesus.com'>
							contact@paredesjesus.com
						</a>
					</p>
				</div>
				<div className={styles.right}>
					<form ref={form} onSubmit={sendEmail}>
						<label htmlFor='name'>Nombre</label>
						<input
							type='text'
							id='name'
							name='user_name'
							placeholder='Jesús Paredes'
							required
						/>
						<label htmlFor='phone'>Teléfono</label>
						<input
							type='phone'
							id='phone'
							name='user_phone'
							placeholder='+56 9 1234 5678'
							required
						/>
						<label htmlFor='email'>Correo</label>
						<input
							type='email'
							id='email'
							name='user_email'
							placeholder='jesus.paredes@mayor.cl'
							required
						/>
						<label htmlFor='message'>Mensaje</label>
						<textarea
							id='message'
							name='message'
							placeholder='Cuentame de tu proyecto...'
							rows={6}
							required
						></textarea>
						<div className={styles.underForm}>
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
							<div>
								<AnimatePresence>
									{missingCaptcha && (
										<motion.h4
											animate={{ y: ['30px', 0] }}
											exit={{ y: '30px' }}
										>
											¿Eres un robot?
										</motion.h4>
									)}
								</AnimatePresence>
								<ReCAPTCHA
									sitekey={import.meta.env.VITE_SITE_KEY}
									onChange={handleCaptcha}
									theme='dark'
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
