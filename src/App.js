import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import { handleShow } from './Redux/Action';

function App() {
  const show  = useSelector(state=>state.show)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>WS Redux</h1>
      <button onClick={()=>dispatch(handleShow())}>{show ? "Hide" : "Show"}</button>
      {
        show && <Counter/>
      }
   
    </div>
  );
}

export default App;
