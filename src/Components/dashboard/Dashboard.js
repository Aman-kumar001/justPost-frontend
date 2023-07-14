import { Avatar, Menu, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import Navbar from '../Navbar/Navbar';
import Post from '../Posts/Post';

const Dashboard = () => {
	const [posts, setPosts] = useState([
		{
			author: 'Aman',

			content:
				'laurem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lore mauris et justo',
			comment: [
				{
					author: 'aman',
					content: 'this is the first comment',
					level: 1,
					Comment: [
						{
							author: 'aman',
							content: 'this is the first reply',
							level: 2,
						},
					],
				},
				{
					author: 'aman',
					content: 'this is the second comment',
					level: 1,
				},
			],
		},
		{
			author: 'Aman',
			content: 'ths is the second post',
		},
	]);
	useEffect(() => {
		//get posts here
	}, []);
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.view}>
				<div className={styles.rightPanel}>
					<div className={styles.updates}>Future Updates</div>
				</div>
				<div className={styles.contentSpace}>
					<form action='' className={styles.postForm}>
						<TextField />
						<div className={styles.formBtnCont}>
							<Button variant='contained'>Post</Button>
						</div>
					</form>
					{posts.length > 0 && <Post posts={posts} />}
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
