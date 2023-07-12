import { Button, TextField } from '@mui/material';
import styles from './login.module.css';
import { useState } from 'react';
const Login = ({ token, setToken }) => {
	const [newUser, setnewUser] = useState(false);
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const loginUser = async () => {
		await fetch('api here', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: user,
				password: password,
			}),
		}).then((res) => {
			if (res.status == 200) {
				setToken(res.token);
				history.push('/dashboard');
			} else {
				setError(true);
				setTimeout(() => {
					setError(false);
				}, 2000);
			}
		});
	};

	const registerUser = async () => {
		await fetch('api here', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: user,
				password: password,
			}),
		}).then((res) => {
			if (res.status == 200) {
				setToken(res.token);
				history.push('/dashboard');
			} else {
				setError(true);
				setTimeout(() => {
					setError(false);
				}, 2000);
			}
		});
	};

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
					<div className={styles.btnPack}>
						<Button
							variant='contained'
							onClick={(e) => {
								// e.preventDefault();
								if (user != '' && password != '' && !newUser) {
									loginUser();
								} else if (user != '' && password != '') {
									registerUser();
								} else {
									setError(true);
									setTimeout(() => {
										setError(false);
									}, 2000);
								}
							}}
						>
							{newUser ? 'Register' : 'Login'}
						</Button>

						{/* for 'OR' seperator */}
						<div className={styles.btnSeperate}>
							<div>
								<div></div>
							</div>
							<div>OR</div>
							<div>
								<div></div>
							</div>
						</div>
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
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
