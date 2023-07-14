import { Avatar } from '@mui/material';
import styles from './post.module.css';
import { height } from '@mui/system';
const Post = ({ posts }) => {
	return (
		<div className={styles.container}>
			{posts.map((post) => {
				return (
					<div className={styles.post}>
						<div className={styles.postAuthor}>
							<Avatar className={styles.authorAvatar} /> {post.author}
						</div>
						<div className={styles.postContent}>{post.content}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Post;
