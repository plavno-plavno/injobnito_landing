import React from 'react';
import WhiteLogo from '../../assets/images/white_logo.png';
import styles from './index.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				{/* Верхняя часть футера */}
				<div className={styles.topSection}>
					<div className={styles.brandColumn}>
						<img src={WhiteLogo} alt={'WhiteLogo'}/>
						<div className={styles.contactInfo}>
							{/*<p>+123 456 789</p>*/}
							<p>Hello@injobnito.com</p>
						</div>
						<div className={styles.bottomSection}>
							<div className={styles.copyright}>
								<p>Proudly designed and built with 💘️️. All rights reserved © Injobnito.com LLC | Copyright © 2025</p>
							</div>
						</div>
					</div>
					
					<div className={styles.linksColumns}>
						<div className={styles.linksColumn}>
							<ul className={styles.linksList}>
								<li>Terms of Use</li>
								<li>Privacy Policy</li>
							</ul>
						</div>
						
						<div className={styles.linksColumn}>
							<ul className={styles.linksList}>
								<li>How it works</li>
								<li>Why Injobnito?</li>
								<li>Features</li>
								<li>About</li>
								<li>Testimonials</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
