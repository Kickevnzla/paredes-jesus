import styles from './styles/AboutMe.module.scss';
import Container from '../Container/Container';
import { fotoJesus } from '../../images';

function AboutMe() {
	return (
		<Container>
			<section className={styles.aboutMe}>
				<div className={styles.image}>
					<img src={fotoJesus} alt='Foto de Jesús' />
				</div>
				<div className={styles.content}>
					<h1>Sobre mi</h1>
					<p>
						Soy un desarrollador web autodidacta, apasionado por la tecnología y
						la programación. Me encanta aprender cosas nuevas y compartir
						conocimientos con los demás.
					</p>
				</div>
			</section>
		</Container>
	);
}

export default AboutMe;
