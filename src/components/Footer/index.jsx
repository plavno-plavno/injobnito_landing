import React from 'react';
import WhiteLogo from '../../assets/images/white_logo.png';
import { useGetPrivacyAndTerms } from "../../hooks/useGetPrivacyAndTerms";
import styles from './index.module.scss';

const Footer = () => {
	
	const { isLoading, error, getPrivacyAndTerms } = useGetPrivacyAndTerms();
	
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				{/* Верхняя часть футера */}
				<div className={styles.topSection}>
					<div className={styles.brandColumn}>
						<img src={WhiteLogo} alt={'WhiteLogo'}/>
						<div className={styles.contactInfo}>
							{/*<p>+123 456 789</p>*/}
							<a href="mailto:Hello@injobnito.com">Hello@injobnito.com</a>
						</div>
						<div className={styles.bottomSection}>
							<div className={styles.copyright}>
								<p>Proudly designed and built with 💘️️. All rights reserved © Injobnito.com LLC | Copyright © 2025</p>
							</div>
						</div>
					</div>
					
					<div className={styles.linksColumns}>
						<div className={styles.linksColumn}>
							<div className={styles.linksList}>
								<a onClick={() => getPrivacyAndTerms('privacyPolicy')}>Terms of Use</a>
								<a onClick={() => getPrivacyAndTerms('termsAndConditions')}>Privacy Policy</a>
							</div>
						</div>
						
						<div className={styles.linksColumn}>
							<div className={styles.linksList}>
								<a href='#HowItWorksBlock'>How it works</a>
								<a href='#WhyInjobnitoBlock'>Why Injobnito?</a>
								<a href={"#WhatMakesUsDifferentBlock"}>Features</a>
								<a href={"#AboutInjobnitoBlock"}>About</a>
								<a href='#TestimonialsBlock'>Testimonials</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
