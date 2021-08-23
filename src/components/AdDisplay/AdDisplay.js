import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './addisplay.css';

function AdDisplay({ children }) {
	const [adIndex, setAdIndex] = useState(0);
	const [adsHeight, setAdsHeight] = useState('100px');
	const [adsWidth, setAdsWidth] = useState('100px');
	const controls = useAnimation();
	const adDisplayRef = useRef(null);

	useEffect(() => {
		// FIXME react reads addisplay width and height to apply to ad
		const height = adDisplayRef.current.clientHeight;
		const width = adDisplayRef.current.clientWidth;

		setAdsHeight(height);
		setAdsWidth(width);
		if (height !== null) console.log(`height`, height);
	}, [adDisplayRef.current]);

	const nextAd = (idx, delay = 0) => {
		setTimeout(async () => {
			console.log(`delay:`, delay);
			await controls.start({
				opacity: 0,
				transition: { duration: 1 },
			});

			if (idx === children.length - 1) {
				setAdIndex(0);
			} else {
				setAdIndex(idx + 1);
			}

			await controls.start({
				opacity: 1,
			});
		}, delay * 1000);
	};

	return (
		<motion.div className="addisplay" ref={adDisplayRef} animate={controls}>
			{React.Children.map(
				children,
				(child, idx) =>
					adIndex === idx &&
					React.cloneElement(child, {
						key: idx,
						nextAd: (delay) => nextAd(idx, delay),
						initial: { opacity: 0 },
						exit: { opacity: 0 },
					})
			)}
			<br />
			<button
				className="btn btn-primary"
				style={{
					position: 'absolute',
					top: '70px',
					left: '70px',
					background: '#444',
				}}
				onClick={() => nextAd()}
			>
				Next ad
			</button>
		</motion.div>
	);
}

export default AdDisplay;
