import './App.css';
import Login from './Components/login/Login';
import { useState } from 'react';
function App() {
	const [token, setToken] = useState('');
	return (
		<div className='App'>
			<Login token={token} setToken={setToken} />
		</div>
	);
}

export default App;
