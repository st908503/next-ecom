import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

const Navbar = () => {

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
        <div className='flex flex-col md:flex-row justify-between md:justify-start items-center mb-1 py-2 shadow-md'>
            <div className='mx-5 '>
                <Link href={'/'} legacyBehavior>
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-[#60c1ad] rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">OneShop</span>
                    </a>
                </Link>
            </div>
            <div className="nav">
                <ul className="flex space-x-2 font-bold md:text-md py-2">
                    <Link href={'/tshirts'}> <li>Tshirts</li></Link>
                    <Link href={'/hoodies'}> <li>Hoodies</li></Link>
                    <Link href={'/stickers'}><li>Stickers</li></Link>
                    <Link href={'/mugs'}> <li>Mugs</li></Link>
                </ul>
            </div>

            <div onClick={toggleCart} className="cart absolute right-0 top-2 md:top-4 mx-5">
                <AiOutlineShoppingCart className='text-2xl md:text-3xl cursor-pointer' />
            </div>


            <div ref={ref} className="sideCart absolute top-0 right-0 w-72 h-full bg-teal-400 px-8 py-10 transform transition-transform translate-x-full ">
                <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                <span onClick={toggleCart} className='absolute top-2 right-2 cursor-pointer text-2xl'><AiFillCloseCircle /></span>
                <ol className='list-decimal font-semibold'>
                    <li>
                        <div className="flex my-5">
                            <div className='w-2/3 font-semibold'>T-shirt</div>
                            <div className='w-1/3 flex justify-center items-center font-semibold text-lg'><AiFillMinusCircle className='cursor-pointer text-teal-800' /><span className='mx-2 text-sm md:text-lg'>1</span><AiFillPlusCircle className='cursor-pointer text-teal-800' /></div>
                        </div>
                    </li>
                    <li>
                        <div className="flex my-5">
                            <div className='w-2/3 font-semibold'>T-shirt</div>
                            <div className='w-1/3 flex justify-center items-center font-semibold text-lg'><AiFillMinusCircle className='cursor-pointer text-teal-800' /><span className='mx-2 text-sm md:text-lg'>1</span><AiFillPlusCircle className='cursor-pointer text-teal-800' /></div>
                        </div>
                    </li>
                    <li>
                        <div className="flex my-5">
                            <div className='w-2/3 font-semibold'>T-shirt</div>
                            <div className='w-1/3 flex justify-center items-center font-semibold text-lg'><AiFillMinusCircle className='cursor-pointer text-teal-800' /><span className='mx-2 text-sm md:text-lg'>1</span><AiFillPlusCircle className='cursor-pointer text-teal-800' /></div>
                        </div>
                    </li>
                    <li>
                        <div className="flex my-5">
                            <div className='w-2/3 font-semibold'>T-shirt</div>
                            <div className='w-1/3 flex justify-center items-center font-semibold text-lg'><AiFillMinusCircle className='cursor-pointer text-teal-800' /><span className='mx-2 text-sm md:text-lg'>1</span><AiFillPlusCircle className='cursor-pointer text-teal-800' /></div>
                        </div>
                    </li>
                    <li>
                        <div className="flex my-5">
                            <div className='w-2/3 font-semibold'>T-shirt</div>
                            <div className='w-1/3 flex justify-center items-center font-semibold text-lg'><AiFillMinusCircle className='cursor-pointer text-teal-800' /><span className='mx-2 text-sm md:text-lg'>1</span><AiFillPlusCircle className='cursor-pointer text-teal-800' /></div>
                        </div>
                    </li>
                </ol>
                <div className='flex'>
                    <button className="flex mr-2  text-white bg-teal-800 border-0 py-2 px-2 focus:outline-none hover:bg-white hover:text-teal-800 rounded text-sm"><BsFillBagCheckFill className='m-1' /> Checkout</button>
                    <button className="flex mr-2 text-white bg-teal-800 border-0 py-2 px-2 focus:outline-none hover:bg-white hover:text-teal-800 rounded text-sm">Clear Cart</button>
                </div>
            </div>


        </div>
    )
}

export default Navbar