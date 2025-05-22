import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TaglineItem from "../TaglineItem";
import styles from './index.module.scss';

const TestimonialsBlock = () => {
	const [isMobile, setIsMobile] = useState(false);
	
	const usersReviews = [
		{
			avatarColor: '#FDECEC',
			userName: 'Nicola',
			jobTitle: 'Director of Advisory & Capital',
			desc: '"Injobnito redefines how we find top talent. By focusing on skills and eliminating bias, we get stronger candidates faster—without the noise of traditional hiring methods."'
		},
		{
			avatarColor: '#D4EDFF',
			userName: 'Brian',
			jobTitle: 'Machine Learning Engineer',
			desc: '"A platform that prioritizes skills over assumptions is exactly what the hiring industry needs. Injobnito’s vision is refreshing and innovative."'
		},
		{
			avatarColor: '#CFC7FF',
			userName: 'Natalie',
			jobTitle: 'Talent Acquisition Manager',
			desc: '"Injobnito takes the guesswork out of hiring. I get matched with candidates based on real skills and qualifications—no distractions, just great talent."'
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
							<div
								className={styles.companyItem_heading_avatar}
								style={{ backgroundColor: review.avatarColor }}
							/>
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
				{doubleUsersReviews.map((review, index) => (
					<SwiperSlide key={`mobile-${review.userName}-${index}`}>
						<div className={styles.companyItem}>
							<div className={styles.companyItem_heading}>
								<div
									className={styles.companyItem_heading_avatar}
									style={{ backgroundColor: review.avatarColor }}
								/>
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
				<h1>{'What Job Seekers & Employers \n Are Saying About Injobnito'}</h1>
			</div>
			{isMobile ? renderMobileSlider() : renderDesktopCarousel()}
		</section>
	);
};

export default TestimonialsBlock;
