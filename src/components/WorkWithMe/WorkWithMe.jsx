import WorkWithMeArticle from "../WorkWithMeArticle";
import styles from "./styles/WorkWithMe.module.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

function WorkWithMe() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 50vh", "end 50vh"],
	});

	const pathLength = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const article = [
		{
			title: "Contáctame para trabajar juntos",
			parraph:
				"Estoy disponible para trabajar en proyectos de desarrollo web. Si tienes una idea o proyecto en mente, no dudes en contactarme.",
		},
		{
			title: "Reunámonos para discutir tu proyecto",
			parraph:
				"Agendaremos una reunión para discutir tu proyecto y tus necesidades. Juntos encontraremos la mejor solución.",
		},
		{
			title: "Desarrollo de tu proyecto",
			parraph:
				"Una vez que hayamos acordado los detalles, comenzaré a trabajar en tu proyecto. Te mantendré informado en todo momento.",
		},
		{
			title: "Tu proyecto está listo",
			parraph:
				"Tu proyecto estará listo en el tiempo acordado. Ahora puedes disfrutar de tu nuevo sitio web!",
		},
	];

	return (
		<section id="workWithMe" className={styles.workWithMeContainer}>
			<h1>Trabaja conmigo</h1>
			<div className={styles.workWithMe}>
				<div ref={ref} className={styles.steps}>
					<div className={styles.separator}>
						<svg>
							<title>Separator</title>
							<motion.line
								x1="50%"
								y1="0"
								x2="50%"
								y2="100%"
								stroke="white"
								strokeWidth={3}
								strokeLinecap={"round"}
								pathLength="0"
								style={{ pathLength }}
							/>
						</svg>
					</div>
					{article.map((article) => (
						<WorkWithMeArticle
							key={article.title}
							title={article.title}
							parraph={article.parraph}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default WorkWithMe;
