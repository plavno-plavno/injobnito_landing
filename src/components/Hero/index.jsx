import styles from './index.module.scss';
import Button from '../Button';
import heroImage from '../../assets/images/heroImage.png';
import heroImageX1 from '../../assets/images/heroImageX1.png';
import heroImageAI from '../../assets/images/heroImage.jpg';
import heroMobile from '../../assets/images/hero_mobile.png';

const Hero = () => {
	return (
		<section className={styles.Hero}>
			<h1>
				{'The hiring platform for people who \n hate hiring platforms'}
			</h1>
			<p>
				{'Injobnito is an anonymous, skill-first hiring platform that connects talent to opportunity without the usual hiring headaches'}
			</p>
			<div className={styles.buttonGroup}>
				<Button variant="primary" onClick={() => {
					return window.location.href = 'https://fe-injobnito.vercel.app/auth/onboarding';
				}}>Find Jobs</Button>
				<Button variant="outlined" onClick={() => {
					return window.location.href = 'https://fe-injobnito.vercel.app/auth/onboarding';
				}}>Hire Talent</Button>
			</div>
			<div className={styles.image}>
				<img src={heroImage} alt="Hero Image" className={styles.image_desktop}/>
				<img src={heroMobile} alt="Hero Image Mobile" className={styles.image_mobile}/>
			</div>
		</section>
	);
};

export default Hero;
