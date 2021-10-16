import { session, useSession } from 'next-auth/client'
import React from 'react';
import Image from 'next/dist/client/image';

function InputBox() {
    const [session] = useSession();


    return (
        <div>
            <div>
                <Image classname='rounded-full' src={session.arguments.image} width={40} height={40} layout='fixed' />
                <form className='flex flex-1'>
                    <input type='text' placeholder={`What's going on your mind, ${session.user.name}`} />
                </form>
            </div>
        </div>
    )
}

export default InputBox
