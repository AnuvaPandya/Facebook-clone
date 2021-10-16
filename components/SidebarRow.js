import React from 'react';
import Image from 'next/dist/client/image';

function SidebarRow({ src, Icon, title}) {
    return (
        <div className>
            {src && ( <Image className='rounded-full' src={src} width={30} height={30} layout='fixed' />)}
            {Icon && (<Icon className='h-8 w-8 tex-blue-500' />)}
            <p className='hidden sm:inline-flex font-medium'>{title}</p>
        </div>
    )
}

export default SidebarRow
