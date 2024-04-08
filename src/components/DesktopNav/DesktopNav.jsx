import styles from './styles/DesktopNav.module.scss';

function DesktopNav({ links }) {
	return (
		<ul className={styles.desktopNav}>
			{links.map((link, index) => (
				<li key={index}>
					<a
						onClick={() => {
							window.scrollTo({
								top:
									document.getElementById(link.link).getBoundingClientRect()
										.top +
									window.scrollY -
									150,
								behavior: 'smooth'
							});
						}}
						aria-label={`Link a la sección ${link.text}.`}
					>
						{link.text}
					</a>
				</li>
			))}
		</ul>
	);
}

export default DesktopNav;
