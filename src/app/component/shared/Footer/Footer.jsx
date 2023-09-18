import React from 'react'
import logo from '../../../../../public/logo/1671373628.gif'
import banner from '../../../../../public/logo/LALMOHAN HA-MIM RESIDENTIAL SCHOOL & COLLEGE.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaSquareFacebook, FaSquareXTwitter, FaSquareInstagram, FaSquareYoutube, FaSquarePinterest } from 'react-icons/fa6'
export default function Footer() {
    return (
        <footer className='bg-[#f2f9fb] mt-2' id="footer">
            <div className='w-[90%] mx-auto py-2'>
                <div className='mt-12 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-y-12 lg:grid-cols-4 justify-evenly items-center'>
                    <div className='h-full'>
                        <div>
                            <Image
                                src={logo}
                                alt="institution logo"
                                width={100}
                                height={100}
                                className='pb-4'
                            />

                            <p className='text-sm font-semibold mt-4 pr-4'>LALMOHAN HA-MIM RESIDENTIAL SCHOOL & COLLEGE</p>
                        </div>
                    </div>
                    <div className='h-full'>
                        <div>
                            <h1 className="text-xl font-bold pb-2 text-left">Related Links</h1>
                            <div className='py-2 flex flex-col justify-start items-start text-blue-600'>
                                <Link href="/" className='underline' >Eduction Board Result</Link>
                                <Link href="/" className='underline' >Eduction Ministry</Link>
                                <Link href="/" className='underline' >Eduction Ministry</Link>
                                <Link href="/" className='underline' >DG Website</Link>
                                <Link href="/" className='underline' >Banbeis</Link>
                                <Link href="/" className='underline' >National UniverSity</Link>
                            </div>
                        </div>
                    </div>
                    <div className='h-full'>
                        <div>
                            <h1 className="text-xl font-bold pb-2 text-left">Important Links</h1>
                            <div className='py-2 flex flex-col justify-start items-start text-blue-600'>
                                <Link href="/" className='underline'>National Portal</Link>
                                <Link href="/" className='underline'>Wikipedia</Link>
                                <Link href="/" className='underline'>10 Minutes School</Link>
                                <Link href="/" className='underline'>Khan Academy</Link>
                            </div>
                        </div>
                    </div>
                    <div className='h-full'>
                        <div>
                            <h1 className="text-xl font-bold pb-2 text-left">Maps</h1>
                            <div className='pt-4 w-[98%] height-[300px]'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14761.262671113875!2d90.71620464284744!3d22.3417066048642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ab249a72731625%3A0x9f5047aadcc3ef4e!2sLalmohan%20Ha%20Mim%20Residensial!5e0!3m2!1sen!2sbd!4v1694664579284!5m2!1sen!2sbd" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-auto w-full md:w-[80%]  flex flex-col md:flex-row lg:flex-row flex-wrap px-4 md:px-0 gap-x-2">
                <div className='flex justify-start items-center md:grid md:grid-cols-4 py-8 md:pb-24 md:gap-2 md:w-[20%] md:h-20 ml-[10%]'>
                    <p><FaSquareFacebook className="text-4xl text-gray-400 hover:text-blue-600" /></p>
                    <p><FaSquareXTwitter className="text-4xl text-gray-400 hover:text-black" /></p>
                    <p><FaSquareYoutube className="text-4xl text-gray-400 hover:text-red-600" /></p>
                    <p><FaSquareInstagram className="text-4xl text-gray-400 hover:text-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" /></p>
                    <p><FaSquarePinterest className="text-4xl text-gray-400 hover:text-red-700" /></p>
                </div>
                <div className='h-[200px] sm:ml-[10%] md:ml-0'>
                    <Image
                        src={banner}
                        alt=""
                        width={600}
                    />
                </div>
            </div>
            <div className='container mx-auto border-t border-gray-600 w-[80%] text-center py-2'>
                <p>Copyright &copy; LALMOHAN HA-MIM RESIDENTIAL SCHOOL & COLLEGE 2022, Design & Developed by Automate IT Limited.</p>
            </div>
        </footer>
    )
}
