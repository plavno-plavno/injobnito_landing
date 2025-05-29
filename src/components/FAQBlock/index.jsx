import { useState } from "react";
import TaglineItem from "../TaglineItem";
import ArrowIcon from "../../assets/iconComponents/ArrowIcon";
import styles from './index.module.scss';
import RoleSwitch from "../RoleSwitch";

const faqJSData = [{
	question: "How does Injobnito match me with jobs?",
	answer: "Injobnito matches you with jobs based on your skills, experience, and job preferences such as location, salary range, and qualifications. Our smart matching algorithm analyzes your profile and compares it with job requirements to provide the best-fit opportunities—without revealing personal identifiers to employers."
}, {
	question: "Why do you need my full name if the platform is anonymous?",
	answer: "We collect your full name to verify that profiles on Injobnito are genuine and to prevent fraudulent accounts. However, your name remains private and is never shared with employers unless you choose to do so during the hiring process."
}, {
	question: "Can I change my job preferences after setting up my profile?",
	answer: "Yes! You can update your job preferences anytime by going to your account settings and selecting \"Edit Profile.\" Here, you can adjust details like job category, salary expectations, location preferences, and skills to ensure you receive the most relevant job matches."
}, {
	question: "Who can see my profile details?",
	answer: "Your profile information, such as your skills, experience, and job preferences, is visible to potential employers anonymously. Personal details like your name and contact information remain hidden until you choose to share them when applying for a job or engaging with an employer."
}, {
	question: "How do I update my demographic information?",
	answer: "To update your demographic information, navigate to your account settings and select \"Demographic Information.\" You can edit or remove details at any time. This data is used solely for statistical insights and to enhance platform inclusivity—it will never be shared with employers."
}, {
	question: "How can I improve my job matches on Injobnito?",
	answer: "To improve your job matches, make sure your profile is fully completed with accurate job preferences, skills, and experience. Regularly update your job category, location preferences, and salary expectations to reflect your current goals. Engaging with job recommendations and applying to relevant roles also helps refine future matches."
},];

const faqEmplData = [{
	question: "How does Injobnito match candidates to my job postings?",
	answer: "Our AI recommends candidates who best align with your role based on skills, experience, and preferences. Matches are smart and targeted, not surface-level."
}, {
	question: "What information will I see about candidates?",
	answer: "You'll see each candidate's qualifications, skill set, and experience level. Names and photos are hidden to keep decisions focused on merit."
}, {
	question: "Can I directly contact candidates through the platform?",
	answer: "Yes. You can message candidates anonymously. Their identity remains private unless they choose to share it."
}, {
	question: "How is Injobnito different from LinkedIn or other job platforms?",
	answer: "Injobnito is anonymous and skill-focused. We skip résumés, profile photos, and social connections, and focus on matching based on qualifications."
}, {
	question: "How does Injobnito reduce bias in hiring?",
	answer: "We remove personal identifiers to help you evaluate candidates objectively. This promotes fairer and more inclusive hiring decisions."
}, {
	question: "How can I track my job postings and applications?",
	answer: "Your dashboard gives you a clear view of matches and full control over applicant management."
},];

const FAQItem = ( { question, answer } ) => {
	const [isOpen, setIsOpen] = useState(false);
	
	return (<div className={styles.faqItem}>
		<div
			className={styles.faqQuestion}
			onClick={() => setIsOpen(!isOpen)}
		>
			{question}
			<ArrowIcon className={`${styles.arrowIcon} ${isOpen ? styles.arrowIconOpen : ''}`}/>
		</div>
		<div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}>
			{answer}
		</div>
	</div>);
};

const FAQBlock = () => {
	const [activeTab, setActiveTab] = useState('jobSeekers');
	
	return (<section className={styles.FAQBlock} id="FAQBlock">
		<div className={styles.FAQBlock_heading}>
			<TaglineItem text="FAQ"/>
			<div>
				<h1>{'Got questions? \n We’ve got answers.'}</h1>
				<RoleSwitch
					activeTab={activeTab}
					onTabChange={setActiveTab}
				/>
			</div>
		
		</div>
		{activeTab === 'jobSeekers' ? <div className={styles.faqContainer}>
			{faqJSData.map(( item, index ) => (<FAQItem
				key={index}
				question={item.question}
				answer={item.answer}
			/>))}
		</div> : <div className={styles.faqContainer}>
			{faqEmplData.map(( item, index ) => (<FAQItem
				key={index}
				question={item.question}
				answer={item.answer}
			/>))}
		</div>}
	</section>);
};

export default FAQBlock;
