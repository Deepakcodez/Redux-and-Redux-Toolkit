
import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement, incrementByAmount } from '../store/reducers/cartSlice'
import { Fragment, useEffect } from 'react'
import { asyncGetProducts } from '../store/actions/asyncGetProducts'
// import productReducer from '../store/reducers/productReducer'
export const Products = () => {
  const dispatch = useDispatch()
  // const cartCount = useSelector((state) => state.cartCount.value)
  const {products} = useSelector((state) => state.productReducer.products);
  console.log('>>>>>>>>>>>', products)
  useEffect(() => {
    dispatch(asyncGetProducts())
  }, [])
  return (
    <>
      <div>products</div>
      {/* <div>

    <div className='text-3xl'>{cartCount}</div>
    <div className='flex gap-x-5'>
    <button onClick={()=>dispatch(increment())} className='bg-blue-600 ring-2 ring-blue-400 p-1 rounded-lg'>Increment</button>
    <button onClick={()=>dispatch(decrement())} className='bg-red-600 p-1 ring-2 ring-red-400 rounded-lg'>Decrement</button>
    </div>
    </div> */}
      {products && products.map((prod, index) => (
        <Fragment key={index}>
          <div>{prod.title}</div>
        </Fragment>
      ))}
    </>
  )
}
