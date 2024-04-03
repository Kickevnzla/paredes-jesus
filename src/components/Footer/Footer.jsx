import Container from '../Container/Container';
import styles from './styles/FooterStyled.module.scss';

const Footer = () => {
	return (
		<Container>
			<div className={styles.footer}>
				<h1>Sígueme en:</h1>
				<p>
					Actualmente en: <span>Santiago de Chile</span>
				</p>
				<p>&copy;2024 Grupo Comillas SpA | Todos Los Derechos Reservados</p>
			</div>
		</Container>
	);
};

export default Footer;
