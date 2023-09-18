import Link from 'next/link';
import React from 'react';

const TopNav = () => {
    return (
        <div className='lg:h-10 bg-[#19686d]'>
            <div className='sm:container sm:mx-auto topnav'>
                <div className='flex flex-col sm:flex-row md:flex-row justify-start items-start sm:items-center flex-wrap gap-2 sm:gap-4 sm:w-1/2 md:w-1/2'>
                    <div>
                        EIINO:11111
                    </div>
                   <div>
                    lalmohan@gmail.com
                   </div>
                   <div>
                    018455555555
                   </div>
                </div >
                <div className='flex justify-end items-start flex-wrap gap-4 sm:w-1/2 md:w-1/2'>
                    <Link href="">payment</Link>
                    <Link href="">contact</Link>
                    <Link href="">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default TopNav;