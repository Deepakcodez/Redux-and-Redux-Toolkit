import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar bg-slate-800 h-[5rem] w-full flex  justify-between px-4 items-center'>
    <h1 className="text-2xl text-white font-bold">Redux toolkit</h1>
    <div className="flex gap-8 text-white">
    <Link  to={'/products'} className="">Products</Link>
    <Link  to={'/cart'}>Cart</Link>
    </div>
    
  </div>
  )
}
