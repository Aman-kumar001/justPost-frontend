import { Button, TextField } from '@mui/material';
import styles from './login.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ token, setToken }) => {
	const [newUser, setnewUser] = useState(false);
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [allUsers, setAllUsers] = useState([]);
	const navigate = useNavigate();

	// useEffect(() => {
	// 	fetch('http://localhost:8000/users/getAllNames')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setAllUsers(data);
	// 		});
	// }, []);

	const loginUser = async () => {
		await fetch('http://localhost:8000/users/logInUser', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: user,
				password: password,
			}),
		})
			.then((res) => {
				console.log(res);
				if (res.status == 200) {
					console.log('loged in');
					res.json().then((data) => {
						console.log(data);
						setToken({
							id: data.data[0]._id,
							name: data.data[0].name,
						});
						localStorage.setItem(
							'token',
							JSON.stringify({
								id: data.data[0]._id,
								name: data.data[0].name,
							})
						);
					});
					navigate('/dashboard');
				} else {
					setError(true);
					setTimeout(() => {
						setError(false);
					}, 2000);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const registerUser = async () => {
		await fetch('http://localhost:8000/users/createUser', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: user,
				password: password,
			}),
		}).then((res) => {
			if (res.status == 200) {
				res.json().then((data) => {
					setToken({
						id: data._id,
						name: data.name,
					});
				});
				navigate('/dashboard');
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

						<Button
							variant='contained'
							onClick={(e) => {
								e.preventDefault();
								setnewUser(!newUser);
							}}
						>
							{!newUser ? 'New ?' : 'Back'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
