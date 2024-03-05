
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
      <div className='bg-neutral-300  text-5xl py-3 px-3'>products</div>
      {/* <div>

    <div className='text-3xl'>{cartCount}</div>
    <div className='flex gap-x-5'>
    <button onClick={()=>dispatch(increment())} className='bg-blue-600 ring-2 ring-blue-400 p-1 rounded-lg'>Increment</button>
    <button onClick={()=>dispatch(decrement())} className='bg-red-600 p-1 ring-2 ring-red-400 rounded-lg'>Decrement</button>
    </div>
    </div> */}
          <div className=' bg-neutral-300 p-3  gap-5 grid   grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {products && products.map((prod, index) => (
        <Fragment key={index}>
          <div className='bg-blue-100 rounded-lg shadow-lg '>
            <div className='bg-blue-500 h-[15rem] rounded-lg '>
          <img className='w-full h-full rounded-lg  ' src={prod.images[0]} alt="" />
            </div>
            <div className='bg-blue-100 rounded-lg flex justify-between py-3 px-2'>
            <div className='text-lg '>{prod.title}</div>
            <button className='bg-blue-400 px-2 text-white rounded-lg shadow-md'>Add to cart</button>
            </div>
          </div>
        </Fragment>
      ))}
          </div>
    </>
  )
}
