import { useState } from "react";
import TaglineItem from "../TaglineItem";
import ArrowIcon from "../../assets/iconComponents/ArrowIcon";
import styles from './index.module.scss';

const faqData = [{
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
	return (<section className={styles.FAQBlock} id="FAQBlock">
		<div className={styles.FAQBlock_heading}>
			<TaglineItem text="FAQ"/>
			<h1>{'Got questions? \n We’ve got answers.'}</h1>
		</div>
		<div className={styles.faqContainer}>
			{faqData.map(( item, index ) => (<FAQItem
				key={index}
				question={item.question}
				answer={item.answer}
			/>))}
		</div>
	</section>);
};

export default FAQBlock;
