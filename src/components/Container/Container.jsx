import styles from './styles/Container.module.scss';

function Container({ children }) {
	return <div className={styles.container}>{children}</div>;
}

export default Container;
