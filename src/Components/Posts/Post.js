import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './post.module.css';
import { height } from '@mui/system';
import CommentIcon from '@mui/icons-material/Comment';
import Comment from '../Comments/Comment';
const Post = ({ posts, setPosts }) => {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		var temp = [];
		posts.forEach((post) => {
			temp.push(false);
		});
		setComments(temp);
	}, []);
	return (
		<div className={styles.container}>
			{posts.map((post, index) => {
				return (
					<div className={styles.post} key={index}>
						<div className={styles.postAuthor}>
							<Avatar className={styles.authorAvatar} /> {post.author}
						</div>
						<div className={styles.postContent}>{post.content}</div>
						<div className={styles.postComment}>
							<CommentIcon
								onClick={() => {
									setComments((prev) => {
										var temp = [...prev];
										temp[index] = !temp[index];
										return temp;
									});
								}}
							/>
						</div>
						{comments[index] && post.comments && post?.comments.length > 0 && (
							<Comment comment={post?.comments} setPosts={setPosts} />
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Post;
