import styles from './index.module.scss';
import Button from '../Button';
import heroImage from '../../assets/images/heroImage.png';
import heroMobile from '../../assets/images/hero_mobile.png';

const Hero = () => {
	return (
		<section className={styles.Hero}>
			<h1>
				A <span className={styles.highlight}>smarter</span> way to connect <br/>
				the right talent to the right opportunity
			</h1>
			<p>
				{'An incognito hiring experience that removes personal details, helps job \n seekers get noticed for what they can do, and gives employers a faster \n way to find top-fit talent.'}
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
