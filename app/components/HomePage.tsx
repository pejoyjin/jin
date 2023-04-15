import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='flex gap-5'>
        <Link href={'https://j-p.zeabur.app/'}>
            <div className='flex flex-col items-center text-2xl font-semibold'>
                <p className='text-white'>个人</p>
                <p className=' text-gray-300'>Portfolio</p>
                <Image src='/goku.png' width={120} height={500} alt='' className='md:w-[200px] md:h-[500px]'/>
            </div>
        </Link>
       
       <div className=' border-[2px] border-white '/>
       <Link href={'https://jin-teaching.zeabur.app/'}>
        <div className='flex flex-col items-center text-2xl font-semibold'>
            <p className='text-white'>教学</p>
            <p className=' text-gray-300'>Teaching</p>
        <Image src='/tomas.png' width={120} height={500} alt='' className='md:w-[200px] md:h-[500px]'/>
       </div>
       </Link>
    </div>
  )
}

export default HomePage