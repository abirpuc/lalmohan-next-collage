import Image from 'next/image';
import React from 'react';
import logo from '../../../../../public/logo/1671373628.gif'
import Link from 'next/link';

const TopBanner = () => {

    return (
        <section className='px-2 sm:px-[50px] md:px-[100px] bg-transparent'>
           <div className='py-4 flex flex-col sm:flex-row justify-start items-center'>
                <div>
                    <Image
                        src={logo}
                        alt='institute-logo'
                        width={120}
                        height={120}
                        className='w-[100px] sm:min-w-[150px] md:w-[150px]'
                    />
                </div>
                <div>
                    <Link href="/" className='text-[#19686d] text-center'>
                        <h1 className='text-xl sm:text-2xl md:text-4xl sm:ml-8 font-bold flex-wrap'>LALMOHAN HA-MIM RESIDENTIAL SCHOOL & COLLEGE</h1>
                        <p className='text-lg font-semibold text-center'>Lalmohan</p>
                    </Link>
                    
                </div>
            </div> 
        </section>
    );
};

export default TopBanner;