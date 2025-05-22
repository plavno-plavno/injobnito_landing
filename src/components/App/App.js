import styles from './App.module.scss';
import Header from "../Header";
import Hero from "../Hero";
import TrustedBy from "../TrustedBy";
import HowItWorks from "../HowItWorks";
import WhatMakesUsDifferent from "../WhatMakesUsDifferent";
import AboutInjobnito from "../AboutInjobnito";
import WorkSmarterBlock from "../WorkSmarterBlock";
import TestimonialsBlock from "../TestimonialsBlock";
import WhyWeBuiltInjobnitoBlock from "../WhyWeBuiltInjobnitoBlock";
import FAQBlock from "../FAQBlock";
import ReadyToExperienceBlock from "../ReadyToExperienceBlock";
import Footer from "../Footer";

function App () {
	return (
		<div className={styles.App}>
			<Header/>
			<Hero/>
			<TrustedBy/>
			<HowItWorks/>
			<WhatMakesUsDifferent />
			<AboutInjobnito/>
			<WorkSmarterBlock/>
			<TestimonialsBlock/>
			<WhyWeBuiltInjobnitoBlock/>
			<FAQBlock/>
			<ReadyToExperienceBlock/>
			<Footer/>
		</div>
	);
}

export default App;
