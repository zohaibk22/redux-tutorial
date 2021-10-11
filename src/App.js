import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"


function App() {

  const account = useSelector((state)=>{
    console.log(state)
    return state.account
  })

  const dispatch = useDispatch()
  const AC = bindActionCreators(actionCreators, dispatch)

  const { despositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  console.log(AC)

  console.log(account)
  return (
    <div className="App">
    <h1>{account}</h1>
    <button onClick={()=>{despositMoney(1000)}}>Deposit</button>
    <button onClick={()=>{withdrawMoney(1000)}}>Withdraw</button>
      
    </div>
  );
}

export default App;
