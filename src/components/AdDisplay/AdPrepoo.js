import React from 'react';
import logo from '../../assets/img/veky_logo_white.png';
import imgPrepoo from '../../assets/img/Prepoo green.jpg';
import './adprepoo.css';

import { motion } from 'framer-motion';

Window.renderCount = 0;

// AdPrepoo - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function AdPrepoo({ nextAd }) {
	const text1 = {
		animate: {
			opacity: 0,
			transition: {
				staggerChildren: 0.7,
				delay: 3,
			},
		},
	};

	const text2 = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 1,
				delay: 3.5,
			},
		},
		onAnimationComplete: () => nextAd(2),
	};

	const text1Children = {
		initial: { opacity: 0, x: 25 },
		animate: { opacity: 1, x: 0 },
		transition: { duration: 0.7 },
	};

	const text2Children = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
	};

	return (
		<motion.div className="adprepoo">
			<img src={imgPrepoo} className="imgprepoo" alt="" />

			{/* text 1 */}

			<motion.div
				className="text1"
				variants={text1}
				initial="initial"
				animate="animate"
			>
				<motion.div variants={text1Children} className="brillo">
					BRILLO
				</motion.div>
				<motion.div variants={text1Children} className="suavidad">
					SUAVIDAD
				</motion.div>
				<motion.div variants={text1Children} className="salud">
					SALUD
				</motion.div>
			</motion.div>

			{/* text 2 */}

			<motion.div
				className="text2"
				variants={text2}
				initial="initial"
				animate="animate"
			>
				<motion.div className="prepoo" variants={text2Children}>
					PRE-POO
				</motion.div>

				<motion.img
					variants={text2Children}
					src={logo}
					alt=""
					className="logo"
					onAnimationComplete={() => nextAd(5)}
				/>
			</motion.div>
		</motion.div>
	);
}

export default AdPrepoo;
