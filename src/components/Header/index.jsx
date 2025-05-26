import { useState } from "react";
import LogoIcon from "../../assets/iconComponents/LogoIcon";
import SignInIcon from "../../assets/iconComponents/SignInIcon";
import Button from "../Button";
import styles from './index.module.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	
	return (
		<div className={styles.Header}>
			<LogoIcon/>
			<nav className={styles.Header_menu}>
				<a className={styles.Header_menu_link} href='#HowItWorksBlock'>How it works</a>
				<a className={styles.Header_menu_link} href='#WhyInjobnitoBlock'>Why Injobnito</a>
				<a className={styles.Header_menu_link} href='#TestimonialsBlock'>Testimonials</a>
				<a className={styles.Header_menu_link} href='#FAQBlock'>FAQs</a>
				<Button variant="primary" iconLeft={<SignInIcon/>} onClick={() => {
					return window.location.href = 'https://fe-injobnito.vercel.app/auth/onboarding';
				}}>Sign In</Button>
			</nav>
			<button
				className={`${styles.burgerBtn} ${isOpen ? styles.active : ''}`}
				onClick={toggleMenu}
				aria-label="Toggle menu"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<div className={`${styles.menuOverlay} ${isOpen ? styles.active : ''}`}>
				<nav className={styles.menuContent}>
					<a className={styles.Header_menu_link} href='#HowItWorksBlock' onClick={toggleMenu}>How it works</a>
					<a className={styles.Header_menu_link} href='#WhyInjobnitoBlock' onClick={toggleMenu}>Why Injobnito</a>
					<a className={styles.Header_menu_link} href='#TestimonialsBlock' onClick={toggleMenu}>Testimonials</a>
					<a className={styles.Header_menu_link} href='#FAQBlock' onClick={toggleMenu}>FAQs</a>
					<Button variant="primary" iconLeft={<SignInIcon/>} onClick={() => {
						return window.location.href = 'https://fe-injobnito.vercel.app/auth/onboarding';
					}}>Sign In</Button>
				</nav>
			</div>
		</div>
	);
}

export default Header;
