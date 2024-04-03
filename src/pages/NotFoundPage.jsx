import { HomeLayout } from '../components/Layouts';
import styles from './styles/NotFoundPage.module.scss';

function NotFoundPage() {
	return (
		<>
			<HomeLayout>
				<h1 className={styles.title}>404 Pagina no encontrada</h1>
			</HomeLayout>
		</>
	);
}

export default NotFoundPage;
