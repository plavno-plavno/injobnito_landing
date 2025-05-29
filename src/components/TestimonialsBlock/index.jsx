import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TaglineItem from "../TaglineItem";
import NikolaAvatar from "../../assets/images/nikola_avatar.png";
import BrianAvatar from "../../assets/images/brian_avatar.png";
import NatalieAvatar from "../../assets/images/natalie_avatar.png";
import WahDeAvatar from "../../assets/images/wahde_avatar.png";
import styles from './index.module.scss';

const TestimonialsBlock = () => {
	const [isMobile, setIsMobile] = useState(false);
	
	const usersReviews = [
		{
			avatar: NikolaAvatar,
			userName: 'Nicola',
			jobTitle: 'Director of Advisory & Capital',
			desc: '"Injobnito redefines how we find top talent. By focusing on skills and eliminating bias, we get stronger candidates faster—without the noise of traditional hiring methods."'
		},
		{
			avatar: BrianAvatar,
			userName: 'Brian',
			jobTitle: 'Machine Learning Engineer',
			desc: '"A platform that prioritizes skills over assumptions is exactly what the hiring industry needs. Injobnito’s vision is refreshing and innovative."'
		},
		{
			avatar: NatalieAvatar,
			userName: 'Natalie',
			jobTitle: 'Talent Acquisition Manager',
			desc: '"Injobnito takes the guesswork out of hiring. I get matched with candidates based on real skills and qualifications—no distractions, just great talent."'
		},
		{
			avatar: WahDeAvatar,
			userName: 'Wah-De',
			jobTitle: 'Marketing Agency Founder',
			desc: '"I’ve changed my name on my resume just to get callbacks. With Injobnito, I don’t have to do that. It’s all about what I can actually do."'
		},
	];
	
	const doubleUsersReviews = [...usersReviews, ...usersReviews, ...usersReviews];
	
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640);
		};
		
		handleResize(); // Проверяем при загрузке
		window.addEventListener('resize', handleResize);
		
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	
	const renderDesktopCarousel = () => (
		<div className={styles.TestimonialsBlock_carousel}>
			<div className={styles.marqueeTrack}>
				{doubleUsersReviews.map((review, index) => (
					<div key={`${review.userName}-${index}`} className={styles.companyItem}>
						<div className={styles.companyItem_heading}>
							<img src={review.avatar} className={styles.companyItem_heading_avatar} alt={'avatar'} />
							<div className={styles.companyItem_heading_texts}>
								<p className={styles.companyItem_heading_texts_name}>{review.userName}</p>
								<p className={styles.companyItem_heading_texts_jobTitle}>{review.jobTitle}</p>
							</div>
						</div>
						<div className={styles.companyItem_main}>
							<p className={styles.companyItem_main_desc}>{review.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
	
	const renderMobileSlider = () => (
		<div className={styles.mobileSlider}>
			<Swiper
				modules={[Pagination]}
				spaceBetween={20}
				slidesPerView={1}
				pagination={{ clickable: true }}
				className={styles.swiperContainer}
			>
				{usersReviews.map((review, index) => (
					<SwiperSlide key={`mobile-${review.userName}-${index}`}>
						<div className={styles.companyItem}>
							<div className={styles.companyItem_heading}>
								<img src={review.avatar} className={styles.companyItem_heading_avatar} alt={'avatar'} />
								<div className={styles.companyItem_heading_texts}>
									<p className={styles.companyItem_heading_texts_name}>{review.userName}</p>
									<p className={styles.companyItem_heading_texts_jobTitle}>{review.jobTitle}</p>
								</div>
							</div>
							<div className={styles.companyItem_main}>
								<p className={styles.companyItem_main_desc}>{review.desc}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
	
	return (
		<section className={styles.TestimonialsBlock} id="TestimonialsBlock">
			<div className={styles.TestimonialsBlock_heading}>
				<TaglineItem text="Testimonials"/>
				<h1>{'What job seekers & employers \n are saying about Injobnito'}</h1>
			</div>
			{isMobile ? renderMobileSlider() : renderDesktopCarousel()}
		</section>
	);
};

export default TestimonialsBlock;
