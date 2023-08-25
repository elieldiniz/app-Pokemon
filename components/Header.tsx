import Image from 'next/image'

interface text{
    text: string,
}

export default function Header(){
    return(
        <header className=' bg-yellow-900 fixed top-0 left-0 right-0 flex justify-around items-center'>
             <Image
            src="/image.svg"
            alt=""
            width={100}
            height={200}
            />
            <ul className='flex gap-10'>
               <li className=' py-1 px-3 bg-red-950 text-white hover:shadow-lg hover:shadow-cyan-300/50    rounded-xl hover:bg-cyan-500/50 cursor-pointer '>
                    about
               </li>
            </ul>
        </header>
    )
}