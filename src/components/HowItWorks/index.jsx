import { useState } from "react";
import TaglineItem from "../TaglineItem";
import RoleSwitch from "../RoleSwitch";
import JobSeekerFirstScreenImage from '../../assets/images/job_seeker_first_screen.png';
import RecruiterFirstScreenImage from '../../assets/images/recruiter_first_screen.png';
import JobSeekerSecondScreenImage from '../../assets/images/job_seeker_second_screen.png';
import RecruiterSecondScreenImage from '../../assets/images/recruiter_second_screen.png';
import JobSeekerThirdScreenImage from '../../assets/images/job_seeker_third_screen.png';
import RecruiterThirdScreenImage from '../../assets/images/recruiter_third_screen.png';
import ListIcon from "../../assets/iconComponents/ListIcon";
import styles from './index.module.scss';
import classNames from 'classnames';
import KeyIcon from "../../assets/iconComponents/KeyIcon";
import CheckIcon from "../../assets/iconComponents/CheckIcon";
import NotesIcon from "../../assets/iconComponents/NotesIcon";
import SearchIcon from "../../assets/iconComponents/SearchIcon";
import HandsIcon from "../../assets/iconComponents/HandsIcon";

const HowItWorks = () => {
	const [activeTab, setActiveTab] = useState('jobSeekers');
	return (
		<section className={styles.HowItWorks} id="HowItWorksBlock">
			<div className={styles.HowItWorks_heading}>
				<TaglineItem text="Advantages"/>
				<div>
					<h1>{'How Injobnito works?'}</h1>
					<RoleSwitch
						activeTab={activeTab}
						onTabChange={setActiveTab}
					/>
				</div>
			</div>
			{activeTab === 'jobSeekers' ? <div className={styles.HowItWorks_steps}>
				<div className={styles.HowItWorks_steps_item}>
					<div className={styles.stepWrapper}>
						{/* Левая часть - номер и текст */}
						<div className={styles.stepContent}>
							<div className={styles.stepText}>
								<ListIcon/>
								<p className={styles.stepCounter}><span>01</span> / 03</p>
								<div>
									<h2 className={styles.stepTitle}>Show off your skills</h2>
									<p className={styles.stepDescription}>
										Build a profile that highlights your experience and abilities - no names, no photos, just what
										matters most.
									</p>
								</div>
							</div>
						</div>
						
						{/* Правая часть - только картинка */}
						<div className={styles.stepImageContainer}>
							<img
								src={JobSeekerFirstScreenImage}
								alt="Step illustration"
								className={styles.stepImage}
							/>
						</div>
					</div>
				</div>
				<div className={styles.HowItWorks_steps_item}>
					<div className={classNames(styles.stepWrapper, styles.reverse)}>
						{/* Левая часть - номер и текст */}
						<div className={styles.stepContent}>
							<div className={styles.stepText}>
								<KeyIcon/>
								<p className={styles.stepCounter}><span>02</span> / 03</p>
								<div>
									<h2 className={styles.stepTitle}>Unlock better opportunities</h2>
									<p className={styles.stepDescription}>
										Our smart matching technology pairs your skills with roles that suit your strengths, ensuring
										higher-quality matches and better career prospects.
									</p>
								</div>
							</div>
						</div>
						
						{/* Правая часть - только картинка */}
						<div className={styles.stepImageContainer}>
							<img
								src={JobSeekerSecondScreenImage}
								alt="Step illustration"
								className={styles.stepImage}
							/>
						</div>
					</div>
				</div>
				<div className={styles.HowItWorks_steps_item}>
					<div className={styles.stepWrapper}>
						{/* Левая часть - номер и текст */}
						<div className={styles.stepContent}>
							<div className={styles.stepText}>
								<CheckIcon/>
								<p className={styles.stepCounter}><span>03</span> / 03</p>
								<div>
									<h2 className={styles.stepTitle}>Apply if it's a fit</h2>
									<p className={styles.stepDescription}>
										Injobnito’s platform evaluates your fit for each role, providing personalized match scores. Focus on
										the best options that align with your goals and apply with confidence.
									</p>
								</div>
							</div>
						</div>
						
						{/* Правая часть - только картинка */}
						<div className={styles.stepImageContainer}>
							<img
								src={JobSeekerThirdScreenImage}
								alt="Step illustration"
								className={styles.stepImage}
							/>
						</div>
					</div>
				</div>
			</div> : <div className={styles.HowItWorks_steps}>
				<div className={styles.HowItWorks_steps_item}>
					<div className={styles.stepWrapper}>
						{/* Левая часть - номер и текст */}
						<div className={styles.stepContent}>
							<div className={styles.stepText}>
								<NotesIcon/>
								<p className={styles.stepCounter}><span>01</span> / 03</p>
								<div>
									<h2 className={styles.stepTitle}>Post a role, focused on skills</h2>
									<p className={styles.stepDescription}>
										Highlight the capabilities you need—not just job titles. Our skill-first structure ensures better alignment from the start.
									</p>
								</div>
							</div>
						</div>
						
						{/* Правая часть - только картинка */}
						<div className={styles.stepImageContainer}>
							<img
								src={RecruiterFirstScreenImage}
								alt="Step illustration"
								className={styles.stepImage}
							/>
						</div>
					</div>
				</div>
				<div className={styles.HowItWorks_steps_item}>
					<div className={classNames(styles.stepWrapper, styles.reverse)}>
						{/* Левая часть - номер и текст */}
						<div className={styles.stepContent}>
							<div className={styles.stepText}>
								<SearchIcon/>
								<p className={styles.stepCounter}><span>02</span> / 03</p>
								<div>
									<h2 className={styles.stepTitle}>Discover top-quality candidates</h2>
									<p className={styles.stepDescription}>
										Our smart matching technology connects your role with candidates who have the skills to succeed—helping you hire faster and with more confidence.
									</p>
								</div>
							</div>
						</div>
						
						{/* Правая часть - только картинка */}
						<div className={styles.stepImageContainer}>
							<img
								src={RecruiterSecondScreenImage}
								alt="Step illustration"
								className={styles.stepImage}
							/>
						</div>
					</div>
				</div>
				<div className={styles.HowItWorks_steps_item}>
					<div className={styles.stepWrapper}>
						{/* Левая часть - номер и текст */}
						<div className={styles.stepContent}>
							<div className={styles.stepText}>
								<HandsIcon/>
								<p className={styles.stepCounter}><span>03</span> / 03</p>
								<div>
									<h2 className={styles.stepTitle}>Reach out when it’s a match</h2>
									<p className={styles.stepDescription}>
										Injobnito provides compatibility scores for every candidate—so you can confidently connect with those who are the strongest fit for your role.
									</p>
								</div>
							</div>
						</div>
						
						{/* Правая часть - только картинка */}
						<div className={styles.stepImageContainer}>
							<img
								src={RecruiterThirdScreenImage}
								alt="Step illustration"
								className={styles.stepImage}
							/>
						</div>
					</div>
				</div>
			</div>}
		</section>
	);
};

export default HowItWorks;
