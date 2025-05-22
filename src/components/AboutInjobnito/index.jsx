import TaglineItem from "../TaglineItem";
import styles from './index.module.scss';
import AboutImage from "../../assets/images/about_image.png";
import CheckCircleIcon from "../../assets/iconComponents/CheckCircleIcon";

const aboutInjobnitoList = [
	{
		id: 0,
		title: 'Smart skill matching',
		description: 'We connect job seekers with roles that match their strengths—and help employers discover candidates ready to contribute from day one.'
	},
	{
		id: 1,
		title: 'AI-powered discovery',
		description: 'Injobnito surfaces the right candidates—and the right opportunities—to accelerate hiring and job searching.'
	},
	{
		id: 2,
		title: 'Anonymized profiles',
		description: 'No names, no photos—just skills, experience, and potential. Because talent should speak for itself.'
	},
];

const AboutInjobnito = () => {
	return (
		<section className={styles.AboutInjobnito}>
			<div className={styles.AboutInjobnito_leftBlock}>
				<div className={styles.AboutInjobnito_leftBlock_texts}>
					<TaglineItem text="About Product"/>
					<h1>{'About Injobnito'}</h1>
					<p>Injobnito is a new kind of hiring platform built to spotlight skills, not surface-level details. By
						removing
						names and photos, we help job seekers get noticed for what they can do—and give employers a clearer, faster
						way to find top-fit talent. With smart matching, AI-powered discovery, and anonymous profiles, Injobnito
						simplifies the hiring process and delivers better outcomes for both sides.</p>
				</div>
				
				<div className={styles.AboutInjobnito_leftBlock_list}>
					{aboutInjobnitoList.map(( el ) => {
						const { id, title, description } = el;
						return <div className={styles.AboutInjobnito_leftBlock_list_item} key={id}>
							<CheckCircleIcon/>
							<div>
								<h4>{title}</h4>
								<p>{description}</p>
							</div>
						</div>
					})}
				</div>
			</div>
			<div className={styles.AboutInjobnito_rightBlock}>
				<img
					src={AboutImage}
					alt="Step illustration"
					className={styles.stepImage}
				/>
			</div>
		</section>
	);
};

export default AboutInjobnito;
