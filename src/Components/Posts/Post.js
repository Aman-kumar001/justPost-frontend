import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './post.module.css';
import { height } from '@mui/system';
import CommentIcon from '@mui/icons-material/Comment';
const Post = ({ posts }) => {
	const [comments, setComments] = useState([]);
	useEffect(() => {}, []);
	return (
		<div className={styles.container}>
			{posts.map((post) => {
				return (
					<div className={styles.post}>
						<div className={styles.postAuthor}>
							<Avatar className={styles.authorAvatar} /> {post.author}
						</div>
						<div className={styles.postContent}>{post.content}</div>
						<div className={styles.postComment}>
							<CommentIcon
								onClick={() => {
									setComments(!comments);
								}}
							/>
						</div>
						{comments && <div className={styles.comments}>hey</div>}
					</div>
				);
			})}
		</div>
	);
};

export default Post;
