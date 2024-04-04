import Container from '../Container/Container';
import styles from './styles/WorkWithMe.module.scss';

function WorkWithMe() {
	return (
		<Container>
			<section className={styles.workWithMeContainer}>
				<h1>Trabaja conmigo</h1>
				<div className={styles.workWithMe}>
					<div>
						<h2>Desarrollador web</h2>
						<p>
							Desarrollador web autodidacta desde hace 2 años. He trabajado en
							proyectos personales y en proyectos de clientes.
						</p>
					</div>
					<div>
						<svg>
							<line
								x1='50%'
								y1='0'
								x2='50%'
								y2='100%'
								stroke='white'
								strokeWidth={3}
							/>
						</svg>
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

export default WorkWithMe;
