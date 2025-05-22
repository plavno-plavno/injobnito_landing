import React from 'react';
import styles from './index.module.scss';


const RoleSwitch = ({ activeTab, onTabChange }) => {
	return (
		<div className={styles.switchContainer}>
			<div className={styles.tabs}>
				<button
					className={`${styles.tab} ${activeTab === 'jobSeekers' ? styles.active : ''}`}
					onClick={() => onTabChange('jobSeekers')}
				>
					Job Seekers
					{activeTab === 'jobSeekers' && <span className={styles.activeIndicator} />}
				</button>
				
				<button
					className={`${styles.tab} ${activeTab === 'employers' ? styles.active : ''}`}
					onClick={() => onTabChange('employers')}
				>
					Employers
					{activeTab === 'employers' && <span className={styles.activeIndicator} />}
				</button>
			</div>
		</div>
	);
};

export default RoleSwitch;
