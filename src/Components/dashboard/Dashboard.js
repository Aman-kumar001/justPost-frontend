import { Avatar, Menu, TextField } from '@mui/material';
import styles from './dashboard.module.css';
import Navbar from '../Navbar/Navbar';
import { Button, TextareaAutosize } from '@mui/base';
const Dashboard = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.view}>
				<div>a</div>
				<div className={styles.contentSpace}>
					<form action='' className={styles.postForm}>
						<TextareaAutosize minRows={2} />
						<div>
							<Button variant='contained'>Post</Button>
						</div>
						<hr />
					</form>
				</div>
				<div>a</div>
			</div>
		</div>
	);
};

export default Dashboard;
