import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/login/Login';
import Dashboard from './Components/dashboard/Dashboard';
import { useState } from 'react';
function App() {
	const [token, setToken] = useState('');
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Login token={token} setToken={setToken} />}
					/>
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
