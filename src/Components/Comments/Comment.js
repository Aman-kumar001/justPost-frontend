import { Avatar } from '@mui/material';
import styles from './comment.module.css';
const Comment = ({ comment }) => {
	return (
		<div className={styles.commentContainer}>
			{comment.map((comment, index) => {
				return (
					<div
						key={index}
						className={styles.Comment}
						style={{ marginLeft: `${comment.level * 0.2}rem` }}
					>
						<div className={styles.postAuthor}>
							<Avatar className={styles.authorAvatar} /> {comment.author}
						</div>
						<div>{comment.content}</div>
						{comment?.Comment && <Comment comment={comment?.Comment} />}
					</div>
				);
			})}
		</div>
	);
};

export default Comment;
