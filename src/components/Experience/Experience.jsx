import Container from '../Container/Container';
import styles from './styles/Experience.module.scss';

function Experience() {
	return (
		<Container>
			<section className={styles.experienceContainer}>
				<h1>Experiencia</h1>
				<div className={styles.experience}>
					<div></div>
					<div>
						<h2>Desarrollador web</h2>
						<p>
							Desarrollador web autodidacta desde hace 2 años. He trabajado en
							proyectos personales y en proyectos de clientes.
						</p>
					</div>
					<div>
						<h2>Práctica profesional</h2>
						<p>
							Realicé una práctica profesional en una empresa de desarrollo de
							software. Aprendí mucho sobre desarrollo web y trabajo en equipo.
						</p>
					</div>
				</div>
			</section>
		</Container>
	);
}

export default Experience;
