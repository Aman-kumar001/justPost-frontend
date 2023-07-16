import { Avatar, Menu, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import Navbar from '../Navbar/Navbar';
import Post from '../Posts/Post';

const Dashboard = ({ token }) => {
	const [postContent, setPostContent] = useState('');
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

	const getAllPosts = () => {
		fetch('http://localhost:8000/post/getAllPosts')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			});
	};

	useEffect(() => {
		getAllPosts();
	}, []);

	const postData = async () => {
		// post data here
		await fetch('http://localhost:8000/post/createPost', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				content: postContent,
				author: token.name,
				type: 'post',
				timeStamp: Date.now(),
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});

		getAllPosts();
	};

	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.view}>
				<div className={styles.LeftPanel}>
					<div className={styles.updates}>Future Updates</div>
				</div>
				<div className={styles.contentSpace}>
					<form action='' className={styles.postForm}>
						<TextField
							onChange={(e) => {
								setPostContent(e.target.value);
							}}
						/>
						<div className={styles.formBtnCont}>
							<Button variant='contained' onClick={() => postData()}>
								Post
							</Button>
						</div>
					</form>
					{posts && posts.length > 0 && (
						<Post posts={posts} setPosts={setPosts} token={token} />
					)}
				</div>
				<div className={styles.user}>
					<div className={styles.AvatarCont}>
						<Avatar className={styles.avatar} />
					</div>
					<div className={styles.userDetails}>{token.name}</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
