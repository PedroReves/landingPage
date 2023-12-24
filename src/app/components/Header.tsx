import Button from './Button' 
import Image from 'next/image'

export default function Header() {
  return (
    <nav className='flex justify-between items-center my-6'>
      <Image
        src='/Company.svg'
        width={110}
        height={40}
        quality={70}
        alt='The logo of the company'
        className='mx-10'
      />
      <ul className='flex gap-[50px] cursor-pointer text-base '>
        <li className='hover:underline'>Home</li>
        <li className='hover:underline'>Service</li>
        <li className='hover:underline'>Feature</li>
        <li className='hover:underline'>Product</li>
        <li className='hover:underline'>Testimonial</li>
        <li className='hover:underline'>FAQ</li>
      </ul>
      <div className='cursor-pointer'>
        <a href="#" className='font-medium text-sm py-2.5 px-5 text-greenBrand-100'>Login</a>
        <Button text='Sign Up' className='py-2.5 px-5 bg-greenBrand-100 text-white rounded-md cursor-pointer text-sm font-medium mr-10 hover:bg-greenBrand-400'/>
      </div>
    </nav>
  )
}
