import Link from 'next/link'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  return (
    <>
    <ToastContainer/>
                 <header className='bg-gray-900 py-3 px-2 w-full text-white'>
                    <nav className='flex justify-between items-center'>
                        <Link href="/"  className='text-3xl' >MyApp</Link>
                        <ul className='flex space-x-4 items-center'>
                            <li>
                            <Link href={"/"}>Home</Link>

                            </li>
                            <li>
                                <Link href={"/about"}>About</Link>
                            </li>
                            <li>
                            <Link href={"/contact"}>Contact</Link>

                            </li>
                        </ul>
                    </nav>
                 </header>
    </>
  )
}

export default Navbar
