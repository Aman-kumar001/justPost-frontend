import styles from './features.module.css';
const Features = ({ existingFeatures, upcomingFeatures }) => {
	return (
		<div className={styles.cont}>
			<div>
				<div className={styles.updates}>Features</div>
				<div>
					<ul className={styles.features}>
						{existingFeatures.map((feature) => (
							<li>{feature}</li>
						))}
					</ul>
				</div>
			</div>
			<div>
				<div className={styles.updates}>Upcoming Updates</div>
				<div>
					<ul className={styles.features}>
						{upcomingFeatures.map((feature) => (
							<li>{feature}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Features;
