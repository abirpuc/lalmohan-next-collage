"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
export default function NavContainer({ menuList, subMenu }) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='relative'>
            <nav className=' h-16 bg-[#19686d] flex justify-start items-center '>
                <ul className=' sm:container sm:mx-auto px-4 md:px-16 '>
                    <li className='hidden md:flex justify-start items-center flex-wrap z-30'>
                        {
                            menuList.map(menu => <ul key={menu.id} className="group">
                                <Link className={`group text-md font-bolde ${menu.menu_label === 'home' ? 'home-hover' : ''} nav-item `} key={menu.id}
                                    href={menu?.menu_label === 'home' ? `/` : subMenu[menu.menu_id] ? '/' : `${menu.menu_route}`}
                                >
                                    {menu.menu_label}
                                    {
                                        subMenu[menu.menu_id] && (
                                            <ul className="hover-item-container z-50">
                                                <li className="flex flex-col justify-start items-start px-4 py-2">
                                                    {
                                                        subMenu[menu.menu_id].map(submenu =>
                                                            <Link key={submenu.id} href={`info/${submenu.sub_route}`}
                                                                className="hover:text-white py-2 w-full px-2 rounded-md hover:bg-[#00b3b3] ease-in duration-300"
                                                            >{submenu.submenu_label}</Link>)
                                                    }
                                                </li>

                                            </ul>
                                        )
                                    }

                                </Link>
                            </ul>
                            )
                        }
                    </li>
                    <div onClick={() => setToggle(!toggle)} className='visible cursor-pointer md:hidden'>
                        <GiHamburgerMenu className='text-3xl' />
                    </div>
                </ul>
            </nav>

            {
                toggle === true ?
                    <div className="bg-[#19686d] w-[200px] py-12 absolute z-20">
                        <ul className='sm:mx-auto flex flex-col justify-start'>
                            {
                                menuList.map(menu =>
                                    <li key={menu.id} className='flex flex-col justify-start border-b border-gray-500 items-center gap-y-4 flex-wrap'>
                                        <Link className={`group text-md font-semibold ${menu.menu_label === 'home' ? 'home-hover' : ''} mobile-nav-item`} key={menu.id}
                                            href={menu?.menu_label === 'home' ? `/` : subMenu[menu.menu_id] ? '/' : `/${menu.menu_route}`}
                                        >
                                            {menu.menu_label}
                                            {
                                                subMenu[menu.menu_id] && (
                                                    <ul className="mobile-hover-item-container bg-[#19686d] shadow-sm shadow-gray-300 float-left z-30">
                                                        <li className="px-4 py-2 w-full flex flex-col justify-start bg-[#19686d]">
                                                            {
                                                                subMenu[menu.menu_id].map(submenu =>
                                                                    <Link key={submenu.id} href="/"
                                                                        className="hover:text-white py-2 w-full px-2 rounded-md hover:bg-[#00b3b3] ease-in duration-300"
                                                                    >{submenu.submenu_label}</Link>)
                                                            }
                                                        </li>

                                                    </ul>
                                                )
                                            }

                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div> : ''
            }

        </div>
    )
}
