import Button from "../Button";
import WelcomeImage from "../../assets/images/Welcome.png"
import styles from './index.module.scss';

const ReadyToExperienceBlock = () => {
	
	return (
		<section className={styles.ReadyToExperienceBlock}>
			<div className={styles.ReadyToExperienceBlock_container}>
				<div className={styles.ReadyToExperienceBlock_container_left}>
					<h1>{'Ready to get started?'}</h1>
					<p>Join Injobnito today - build your profile or post your first job.</p>
					<div className={styles.ReadyToExperienceBlock_container_left_buttons}>
						<Button variant="green" onClick={() => {
							return window.location.href = 'https://fe-injobnito.vercel.app/auth/onboarding';
						}}>Start as a Job Seeker</Button>
						<Button variant="outlinedWhite" onClick={() => {
							return window.location.href = 'https://fe-injobnito.vercel.app/auth/onboarding';
						}}>Start as an Employer</Button>
					</div>
				</div>
				<img src={WelcomeImage} alt={'asd'} className={styles.ReadyToExperienceBlock_container_right}/>
			</div>
		</section>
	);
};

export default ReadyToExperienceBlock;
