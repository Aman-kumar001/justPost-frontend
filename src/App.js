import logo from './logo.svg';
import './App.css';
import Login from './Components/login/Login';

function App() {
	const [token, setToken] = useState('');
	return (
		<div className='App'>
			<Login token={token} setToken={setToken} />
		</div>
	);
}

export default App;
