import { useDispatch, useSelector } from "react-redux"
import { addText, decrement, increment } from "../Redux/Action"

const Counter=()=>{
    const count = useSelector(state=>state.count)
    const textP = useSelector(state=>state.textP)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Counter Component</h2>
      
            <button onClick={()=>dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(increment())}>+</button>
            <br/>
            <input type='text' onChange={(e)=> dispatch(addText(e.target.value))}/>
            <h3>{textP}</h3>
        </div>
    )
}

export default Counter