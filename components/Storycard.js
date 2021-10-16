import React from 'react';
import Image from 'next/dist/client/image';

function Storycard({ name, src, profile }) {
    return (
        <div classname='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg-w-32 cursor-pointer-x p-3'>
            <Image classname='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10' src={profile} width={40} height={40} layout="fixed" objectFit='cover' />
            <Image classname='object-cover filter brightness-75 rounded-full lg:rounded-3xl' src={src} layout='fill' />
            <p></p>
        </div>
    )
}

export default Storycard
