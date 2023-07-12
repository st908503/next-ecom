import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
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
            <div className="cart absolute right-0 top-2 md:top-4 mx-5">
                <AiOutlineShoppingCart className='text-2xl md:text-3xl' />
            </div>
        </div>
    )
}

export default Navbar