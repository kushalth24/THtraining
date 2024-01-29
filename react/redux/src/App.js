import './App.css';
import Home from './Home.jsx';
import { useSelector } from 'react-redux';

function App() {
  const {c}=useSelector((state)=>state.custom);
  return (
    <div className="App">
      <h2>App Component: {c}</h2>
      <Home/>
    </div>
  );
}

export default App;
