
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../store/reducers/cartSlice'
export const Products = () => {
    const dispatch = useDispatch()
    const cartCount = useSelector((state) => state.cartCount.value)

  return (
    <>
    <div>products</div>
    <div className=''>{cartCount}</div>
    <button onClick={()=>dispatch(increment())} className='bg-blue-600 ring-2 ring-blue-400 p-1 rounded-lg'>Increment</button>
    <button onClick={()=>dispatch(decrement())} className='bg-red-600 p-1 ring-2 ring-red-400 rounded-lg'>Decrement</button>
    </>
  )
}
