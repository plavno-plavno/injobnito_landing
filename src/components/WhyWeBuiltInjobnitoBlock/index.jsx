import TaglineItem from "../TaglineItem";
import styles from './index.module.scss';
import WWBInjobnito from "../../assets/images/wwb_injobnito.png";
import Button from "../Button";

const WhyWeBuiltInjobnitoBlock = () => {
	return (<section className={styles.WhyWeBuiltInjobnitoBlock} id="WhyInjobnitoBlock">
			<div className={styles.WhyWeBuiltInjobnitoBlock_up}>
				<div className={styles.WhyWeBuiltInjobnitoBlock_leftBlock}>
					<div className={styles.WhyWeBuiltInjobnitoBlock_leftBlock_texts}>
						<TaglineItem text="Mission"/>
						<h1>Why we built Injobnito</h1>
						<div className={styles.WhyWeBuiltInjobnitoBlock_leftBlock_list}>
							<p>We believe great talent should be recognized for what truly matters—skills, experience, and potential.
								That’s why we built Injobnito: a new kind of hiring platform that connects people and opportunities
								without
								the noise.</p>
							<p>By removing personal identifiers, we help job seekers focus on what they bring to the table—and give
								employers a clearer view of who’s truly the best fit. Our skills-first approach unlocks better matches,
								saves time, and opens doors that traditional hiring often misses.</p>
							<p>Whether you're looking to hire or get hired, Injobnito makes the process simpler, smarter, and fairer
								for
								everyone.</p>
						</div>
					</div>
				</div>
				<div className={styles.WhyWeBuiltInjobnitoBlock_rightBlock}>
					<img
						src={WWBInjobnito}
						alt="WWBInjobnito"
						className={styles.stepImage}
					/>
				</div>
			</div>
			<div className={styles.WhyWeBuiltInjobnitoBlock_takeNextStep}>
				<div className={styles.WhyWeBuiltInjobnitoBlock_takeNextStep_texts}>
					<h4>Ready to see it in action?</h4>
					<p>Create your profile or post your first role - it only takes a few minutes.</p>
				</div>
				<div className={styles.WhyWeBuiltInjobnitoBlock_takeNextStep_buttons}>
					<Button variant="primary" onClick={() => {
						return window.location.href = 'https://app.injobnito.com/auth/onboarding';
					}}>Find Work</Button>
					<Button variant="outlined" style={{ background: 'transparent', flexShrink: 0 }} onClick={() => {
						return window.location.href = 'https://app.injobnito.com/auth/onboarding';
					}}>Start Hiring</Button>
				</div>
			</div>
		</section>
	
	);
};

export default WhyWeBuiltInjobnitoBlock;
