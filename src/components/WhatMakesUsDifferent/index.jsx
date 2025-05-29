import { useState } from "react";
import TaglineItem from "../TaglineItem";
import RoleSwitch from "../RoleSwitch";
import styles from './index.module.scss';
import Button from "../Button";
import MagicIcon from "../../assets/iconComponents/MagicIcon";
import DetectiveIcon from "../../assets/iconComponents/DetectiveIcon";
import SettingsSearchIcon from "../../assets/iconComponents/SettingsSearchIcon";

const WhatMakesUsDifferent = () => {
	const [activeTab, setActiveTab] = useState('jobSeekers');
	return (
		<section className={styles.WhatMakesUsDifferent} id="WhatMakesUsDifferentBlock">
			<div className={styles.WhatMakesUsDifferent_heading}>
				<TaglineItem text="Features"/>
				<div>
					<h1>{'What makes us different?'}</h1>
					<RoleSwitch
						activeTab={activeTab}
						onTabChange={setActiveTab}
					/>
				</div>
			</div>
			{activeTab === 'jobSeekers' ? <div className={styles.WhatMakesUsDifferent_cards}>
				<div className={styles.WhatMakesUsDifferent_cards_item}>
					<div className={styles.iconContainer}>
						<DetectiveIcon/>
					</div>
					<h3>A wider net of opportunities</h3>
					<p>
						Unlock opportunities you might have missed on traditional job boards. Our incognito profiles ensure
						recruiters focus on your skills—not personal details—reducing unconscious bias and expanding your career
						possibilities.
					</p>
				</div>
				<div className={styles.WhatMakesUsDifferent_cards_item}>
					<div className={styles.iconContainer}>
						<MagicIcon/>
						<span className={styles.comingSoon}>Coming soon</span>
					</div>
					<h3>{`Smarter matches \n with AI insights`}</h3>
					<p>
						Our AI matches your skills, experience, and potential with roles that fit your strengths, while giving
						recruiters skills-based insights to showcase why you’re the perfect fit.
					</p>
				</div>
				<div className={styles.WhatMakesUsDifferent_cards_item}>
					<div className={styles.iconContainer}>
						<SettingsSearchIcon/>
						<span className={styles.comingSoon}>Coming soon</span>
					</div>
					<h3>Smarter interview prep</h3>
					<p>
						Practice real interview questions with AI feedback to refine your skills and boost confidence.
					</p>
				</div>
			</div> : <div className={styles.WhatMakesUsDifferent_cards}>
				<div className={styles.WhatMakesUsDifferent_cards_item}>
					<div className={styles.iconContainer}>
						<SettingsSearchIcon/>
					</div>
					<h3>Hire smarter, retain longer</h3>
					<p>
						Skills-first hiring leads to better alignment, stronger engagement, and up to 9% higher retention—from day
						one.
					</p>
				</div>
				<div className={styles.WhatMakesUsDifferent_cards_item}>
					<div className={styles.iconContainer}>
						<MagicIcon/>
						<span className={styles.comingSoon}>Coming soon</span>
					</div>
					<h3>{`Smarter matches \n with skill-first insights`}</h3>
					<p>
						Our AI matches candidates to your roles based on real skills and experience — With precision compatibility
						scores, you’ll reduce manual screening and cut your cost-per-hire by up to 30%
					</p>
				</div>
				<div className={styles.WhatMakesUsDifferent_cards_item}>
					<div className={styles.iconContainer}>
						<DetectiveIcon/>
						<span className={styles.comingSoon}>Coming soon</span>
					</div>
					<h3>{'Discover hidden talent, \n faster'}</h3>
					<p>
						Our AI Talent Scout finds skilled, overlooked candidates that traditional systems miss—expanding your
						pipeline and helping you hire faster.
					</p>
				</div>
			</div>}
			
			<div className={styles.WhatMakesUsDifferent_takeNextStep}>
				<div className={styles.WhatMakesUsDifferent_takeNextStep_texts}>
					<h4>Take the next step</h4>
					<p>Create your profile or start hiring with Injobnito.</p>
				</div>
				<div className={styles.WhatMakesUsDifferent_takeNextStep_buttons}>
					<Button variant="primary" onClick={() => {
						return window.location.href = 'https://fe-injobnito.vercel.app/auth/onboarding';
					}}>Get started</Button>
					<Button variant="outlined" style={{ background: 'transparent' }} onClick={() => {
						return window.location.href = 'https://fe-injobnito.vercel.app/auth/onboarding';
					}}>Start Hiring</Button>
				</div>
			</div>
		</section>
	);
};

export default WhatMakesUsDifferent;
