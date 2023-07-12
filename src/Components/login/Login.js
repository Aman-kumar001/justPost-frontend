import { Button, TextField } from '@mui/material';
import styles from './login.module.css';
import { useState } from 'react';
const Login = () => {
	const [newUser, setnewUser] = useState(false);
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	return (
		<div className={styles.container}>
			<div className={styles.login}>
				<div className={styles.avtar}></div>
				<form action='' className={styles.form}>
					<div>
						<TextField
							id='standard-required-input'
							error={error}
							label='Username'
							onChange={(e) => setUser(e.target.value)}
							helperText={error && user == '' ? 'Username is required' : ''}
						/>
					</div>
					<div>
						<TextField
							id='standard-password-input'
							error={error}
							label='Password'
							type='password'
							autoComplete='current-password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							helperText={error && password == '' ? 'Password is required' : ''}
						/>
					</div>
					<Button
						variant='contained'
						onClick={(e) => {
							// e.preventDefault();
							if (user != '' && password != '') {
							} else {
								setError(true);
								setTimeout(() => {
									setError(false);
								}, 3000);
							}
						}}
					>
						{newUser ? 'Register' : 'Login'}
					</Button>
					{!newUser && (
						<Button
							variant='contained'
							onClick={(e) => {
								e.preventDefault();
								setnewUser(true);
							}}
						>
							New ?
						</Button>
					)}
				</form>
			</div>
		</div>
	);
};

export default Login;
