import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'

function App() {

  const account = useSelector((state)=>{
    console.log(state)
    return state.account
  })

  console.log(account)
  return (
    <div className="App">
    <h1>{account}</h1>
    <button>Deposit</button>
    <button>withdraw</button>
      
    </div>
  );
}

export default App;
