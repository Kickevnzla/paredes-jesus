import styles from './styles/MainBanner.module.scss';
import { floatingAstronaut, planet1 } from '../../images';
import { motion } from 'framer-motion';
import { useScramble } from 'use-scramble';
import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const astronautVariants = {
	hidden: {
		y: -20,
		x: -20,
		opacity: 0
	},
	idle: {
		y: -40,
		x: -40,
		opacity: 1,
		scale: 1.05,
		transition: {
			duration: 3,
			x: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
			y: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
			scale: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
			opacity: { duration: 3 }
		}
	}
};

const socialVariants = {
	hover: {
		scale: 1.2,
		y: -3,
		transition: {
			duration: 0.3
		}
	}
};

const planetVariants = {
	hidden: {
		opacity: 0,
		filter: 'blur(10px)'
	},
	idle: {
		opacity: 1,
		scale: 1.03,
		filter: 'blur(0px) contrast(1.3)',
		transition: {
			duration: 1,
			opacity: { duration: 0.2 },
			scale: { duration: 4, repeat: Infinity, repeatType: 'reverse' },
			filter: { duration: 1 }
		}
	}
};

function MainBanner() {
	useEffect(() => {
		const interval = setInterval(() => {
			replay();
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const { ref, replay } = useScramble({
		text: 'Desarrollador web full stack.',
		characters: 'lowercase',
		speed: 1,
		tick: 1.5,
		step: 6,
		scramble: 34,
		seed: 2,
		chance: 1,
		overflow: true,
		overdrive: false,
		delimiter: ' '
	});

	return (
		<section id='mainBanner'>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<span>¡Hola!</span>
					<h1 ref={ref}>Soy Jesús Paredes</h1>
					<p ref={ref} />
					<div>
						<motion.a
							href='https://github.com/Kickevnzla'
							rel='noreferrer noopener'
							target='_blank'
							variants={socialVariants}
							whileHover='hover'
						>
							<FaGithub />
						</motion.a>
						<motion.a
							href='https://www.linkedin.com/in/jesús-paredes-arnaez-8725841bb'
							rel='noreferrer noopener'
							target='_blank'
							variants={socialVariants}
							whileHover='hover'
						>
							<FaLinkedin />
						</motion.a>
						<motion.a
							href='https://www.instagram.com/kickevnzla'
							rel='noreferrer noopener'
							target='_blank'
							variants={socialVariants}
							whileHover='hover'
						>
							<FaInstagram />
						</motion.a>
					</div>
				</div>
				<motion.div
					initial='hidden'
					animate='idle'
					variants={astronautVariants}
					className={styles.image}
				>
					<img draggable='false' src={floatingAstronaut} alt='Main Banner' />
				</motion.div>
				<motion.img
					draggable='false'
					src={planet1}
					alt='Planet image'
					className={styles.planet}
					initial='hidden'
					animate='idle'
					variants={planetVariants}
				/>
			</div>
		</section>
	);
}

export default MainBanner;
