import TaglineItem from "../TaglineItem";
import DeloitteIcon from "../../assets/iconComponents/DeloitteIcon";
import GoogleIcon from "../../assets/iconComponents/GoogleIcon";
import WalmartIcon from "../../assets/iconComponents/WalmartIcon";
import ATTIcon from "../../assets/iconComponents/ATTIcon";
import DoorDashIcon from "../../assets/iconComponents/DoorDashIcon";
import JPMorganIcon from "../../assets/iconComponents/JPMorganIcon";
import StarbucksIcon from "../../assets/iconComponents/StarbucksIcon";
import SalesforceIcon from "../../assets/iconComponents/SalesforceIcon";
import AmazonIcon from "../../assets/iconComponents/AmazonIcon";
import styles from './index.module.scss';
import KpmgIcon from "../../assets/iconComponents/KpmgIcon";
import RivianIcon from "../../assets/iconComponents/RivianIcon";

const TrustedBy = () => {
	const companies = [
		{ icon: <GoogleIcon className={styles.icon} />, name: 'Google' },
		{ icon: <DeloitteIcon className={styles.icon} />, name: 'Deloitte' },
		{ icon: <WalmartIcon className={styles.icon} />, name: 'Walmart' },
		{ icon: <ATTIcon className={styles.icon} />, name: 'AT&T' },
		{ icon: <DoorDashIcon className={styles.icon} />, name: 'DoorDash' },
		{ icon: <JPMorganIcon className={styles.icon} />, name: 'J.P.Morgan' },
	];
	
	const companiesSecondLine = [
		{ icon: <StarbucksIcon className={styles.icon} />, name: 'Starbucks' },
		{ icon: <SalesforceIcon className={styles.icon} />, name: 'Salesforce' },
		{ icon: <AmazonIcon className={styles.icon} />, name: 'Amazon' },
		{ icon: <KpmgIcon className={styles.icon} />, name: 'Kpmg' },
		{ icon: <RivianIcon className={styles.icon} />, name: 'Rivian' },
	];
	
	const doubleCompanies = [...companies, ...companies];
	const doubleCompaniesSecondLine = [...companiesSecondLine, ...companiesSecondLine];
	
	return (
		<section className={styles.TrustedBy}>
			<div className={styles.TrustedBy_heading}>
				<TaglineItem text="Trusted by" />
				<h1>{'Join the platform where top talent \n and top teams find each other'}</h1>
				<p>Trusted by professionals from companies like</p>
			</div>
			<div className={styles.marqueeContainer}>
				<div className={styles.marqueeTrack}>
					{doubleCompanies.map((company, index) => (
						<div
							key={`${company.name}-${index}`}
							className={styles.companyItem}
						>
							{company.icon}
						</div>
					))}
				</div>
				<div className={styles.marqueeTrack}>
					{doubleCompaniesSecondLine.map((company, index) => (
						<div
							key={`${company.name}-${index}`}
							className={styles.companyItem}
						>
							{company.icon}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TrustedBy;
