import TaglineItem from "../TaglineItem";
import HandLike from "../../assets/images/hand_like.png";
import styles from './index.module.scss';
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const WorkSmarterBlock = () => {
	const [animate, setAnimate] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true
	});
	
	useEffect(() => {
		if (inView) {
			setAnimate(true);
		}
	}, [inView]);
	
	const stats = [
		{
			percent: 48,
			title: 'of HR managers say traditional assessments lead to poor hiring decisions',
			description: 'Outdated filters are costing companies time, money, and talent.'
		},
		{
			percent: 69,
			title: 'of job seekers say the hiring process doesn\'t reflect their actual skills',
			description: 'Resume screens and networks can\'t capture true capability.'
		},
		{
			percent: 79,
			title: 'of job seekers want a platform that matches them based on qualifications',
			description: 'The demand for skills-first, performance-focused hiring is real.'
		}
	];
	
	return (
		<section className={styles.WorkSmarterBlock}>
			<img src={HandLike} alt={'up finger like'} />
			<div className={styles.WorkSmarterBlock_heading}>
				<TaglineItem text="Numbers" color={'#fff'}/>
				<h1>{'The Data Is Clear: \n Hiring Needs to Work Smarter'}</h1>
				<p>Today's hiring systems waste time, overlook qualified talent, and miss the mark on performance.</p>
			</div>
			<div ref={ref} className={styles.statsBlock}>
				<div className={styles.container}>
					{stats.map((stat, index) => (
						<div key={index} className={`${styles.statItem} ${animate ? styles.animate : ''}`}>
							<div className={styles.numberWrapper}>
								<div className={styles.percentContainer}>
									{animate && (
										<CountUp
											end={stat.percent}
											duration={2.5}
											delay={index * 0.2}
											className={styles.percent}
										/>
									)}
									<span className={styles.percentSign}>%</span>
								</div>
							</div>
							<div className={styles.textContent}>
								<h3 className={styles.title}>{stat.title}</h3>
								<p className={styles.description}>{stat.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WorkSmarterBlock;
