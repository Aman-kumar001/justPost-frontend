import { Avatar, Menu, TextField, Button } from '@mui/material';
import styles from './dashboard.module.css';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.view}>
				<div>a</div>
				<div className={styles.contentSpace}>
					<form action='' className={styles.postForm}>
						<TextField />
						<div>
							<Button variant='contained'>Post</Button>
						</div>
						<hr />
					</form>
				</div>
				<div className={styles.user}>
					<div className={styles.AvatarCont}>
						<Avatar className={styles.avatar} />
					</div>
					<div className={styles.userDetails}>Aman</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
