import React, { useRef } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'

const Navbar = ({logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    const [dropdown, setDropdown] = useState()
    // console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref = useRef();

    return (
        <div className='flex flex-col md:flex-row justify-between md:justify-start items-center mb-1 py-2 shadow-md sticky top-0 bg-white z-10'>
            <div className='mx-5 mr:auto md:mx-5'>
                <Link href={'/'} legacyBehavior>
                    <span className="ml-3 font-bold text-xl cursor-pointer">OneShop</span>
                </Link>
            </div>
            <div className="nav">
                <ul className="flex space-x-2 font-bold md:text-md py-2">
                    <Link href={'/tshirts'}> <li className='hover:text-teal-500'>Tshirts</li></Link>
                    <Link href={'/hoodies'}> <li className='hover:text-teal-500'>Hoodies</li></Link>
                    <Link href={'/stickers'}><li className='hover:text-teal-500'>Stickers</li></Link>
                    <Link href={'/mugs'}> <li className='hover:text-teal-500'>Mugs</li></Link>
                </ul>
            </div>

            <div className="cart items-center absolute right-0 top-2 md:top-4 mx-5 flex">
                <a onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                    {dropdown && <div onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="absolute right-8 bg-white shadow-lg top-7 py-4 rounded-md px-5 font-bold w-32">
                        <ul>
                            <Link href={'/myaccount'}> <li className='py-1 text-sm hover:text-teal-800'>My Account</li></Link>
                            <Link href={'/orders'}> <li className='py-1 text-sm hover:text-teal-800'>Orders</li></Link>
                            <li onClick={logout} className='cursor-pointer py-1 text-sm hover:text-teal-800'>Logout</li>
                        </ul>
                    </div>}
                    {user.value && <MdAccountCircle className='text-2xl mx-2 md:text-3xl cursor-pointer' />}
                </a>
                {!user.value && <Link href={'/login'}>
                    <button className='bg-teal-500 px-2 py-1 rounded-md text-sm text-white mx-2'>Login</button>
                </Link>}
                <AiOutlineShoppingCart onClick={toggleCart} className='text-2xl md:text-3xl cursor-pointer' />
            </div>



            <div ref={ref} className={`sideCart overflow-y-scroll absolute top-0 right-0 w-72 h-[100vh] bg-teal-400 px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
                <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                <span onClick={toggleCart} className='absolute top-2 right-2 cursor-pointer text-2xl'><AiFillCloseCircle /></span>
                <ol className='list-decimal font-semibold'>
                    {Object.keys(cart).length === 0 && <div className='my-4 font-semibold'>Your cart is empty.</div>}
                    {Object.keys(cart).map((k) => (
                        <li key={k}>
                            <div className="flex my-5">
                                <div className='w-2/3 font-semibold'>{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                                <div className='w-1/3 flex justify-center items-center font-semibold text-lg'><AiFillMinusCircle onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer text-teal-800' /><span className='mx-2 text-sm md:text-lg'>{cart[k].qty}</span><AiFillPlusCircle onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer text-teal-800' /></div>
                            </div>
                        </li>
                    ))}

                </ol>
                <div className='font-bold my-2'>Subtotal: ₹{subTotal}</div>
                <div className='flex'>
                    <Link href={'/checkout'}><button className="flex mr-2  text-white bg-teal-800 border-0 py-2 px-2 focus:outline-none hover:bg-white hover:text-teal-800 rounded text-sm"><BsFillBagCheckFill className='m-1' /> Checkout</button>
                    </Link>
                    <button onClick={clearCart} className="flex mr-2 text-white bg-teal-800 border-0 py-2 px-2 focus:outline-none hover:bg-white hover:text-teal-800 rounded text-sm">Clear Cart</button>
                </div>
            </div>


        </div>
    )
}

export default Navbar