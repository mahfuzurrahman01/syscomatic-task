
import Link from 'next/link';
import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2'
const Navbar = () => {
    // =========== this state will manage the mobile version side navigation bar =============
    const [mode, setMode] = useState(false)

    return (
        <div className="w-full overflow-hidden">
            {/*======== this section will displayed only on desktop screen ======== */}
            <ul className="w-full lg:flex hidden justify-evenly items-center h-24 bg-black text-white ">
                <Link href='/'><li className="px-5 py-1 hover:bg-white hover:text-black hover:duration-500 cursor-pointer">Home</li></Link>
                <Link href='/about'><li className="px-5 py-1 hover:bg-white hover:text-black hover:duration-500 cursor-pointer">About</li></Link>
                <Link href='/services'><li className="px-5 py-1 hover:bg-white hover:text-black hover:duration-500 cursor-pointer">Services</li></Link>
                <Link href='/portfolio'><li className="px-5 py-1 hover:bg-white hover:text-black hover:duration-500 cursor-pointer">Portfolio</li></Link>
                <Link href='/contact'><li className="px-5 py-1 hover:bg-white hover:text-black hover:duration-500 cursor-pointer">Contact</li></Link>
            </ul>
            {/*======== this section will displayed only on smaller device screen ======== */}
            <div className={`w-[95%] mx-auto h-12  flex justify-between items-center overflow-hidden`}>
                <img src="/logo.png" alt="logo" className='lg:hidden block w-8 h-8' />
                <div className='lg:hidden block'>
                    {
                        !mode ? <HiBars3 className='w-8 h-8' onClick={() => setMode(true)} />
                            : <HiXMark className='w-8 h-8' onClick={() => setMode(false)} />
                    }
                </div>
            </div>
        
                <div className={`overflow-hidden ${mode ? 'translate-x-[0%] duration-500 absolute w-full' : 'absolute w-full translate-x-[-100%] duration-500 '}`}>
                    <ul className={` pt-3 flex lg:hidden flex-col justify-evenly items-center min-h-screen bg-black text-white`}>
                        <Link href='/'><li className="px-5 py-1 hover:bg-white hover:text-black hover:duration-500 cursor-pointer">Home</li></Link>
                        <Link href='/about'><li className="px-5 py-1 hover:bg-white hover:text-black hover:duration-500 cursor-pointer">About</li></Link>
                        <Link href='/services'><li className="px-5 py-1 hover:bg-white hover:text-black hover:duration-500 cursor-pointer">Services</li></Link>
                        <Link href='/portfolio'><li className="px-5 py-1 hover:bg-white hover:text-black hover:duration-500 cursor-pointer">Portfolio</li></Link>
                        <Link href='/contact'><li className="px-5 py-1 hover:bg-white hover:text-black hover:duration-500 cursor-pointer">Contact</li></Link>
                        <li></li>
                        <li></li>
                    </ul>

                </div>
            
        </div>
    );
};

export default Navbar;