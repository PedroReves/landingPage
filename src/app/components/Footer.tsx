import Button from './Button'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-16 px-[165px] bg-neutralBlack px-[165px] flex items-center">
      <div className='flex flex-col'>
        <Image src='/Company-Light.svg' width={160} height={80} alt='The logo of the company' quality={80} className='my-10'/>
        <p className='text-neutralSilver my-2 font-normal text-sm'>Copyright © 2020 Nexcent ltd.</p>
        <p className='text-neutralSilver font-normal text-sm'>All Rights Reserved</p>
        <div className='flex my-10 gap-x-4'>
          <Image src='/Social-Icons.svg' width={32} height={32} alt='Instagram Icon' className='cursor-pointer'/>
          <Image src='/Social-Icons-1.svg' width={32} height={32} alt='Dribbble Icon' className='cursor-pointer'/>
          <Image src='/Social-Icons-2.svg' width={32} height={32} alt='Twitter Icon' className='cursor-pointer'/>
          <Image src='/Social-Icons-3.svg' width={32} height={32} alt='Youtube Icon' className='cursor-pointer'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-3 pl-[135px]'>
        <h4 className='my-3 text-white text-2xl font-semibold'>Company</h4>
        <p className='font-normal text-neutralSilver text-sm cursor-pointer'>About Us</p>
        <p className='font-normal text-neutralSilver text-sm cursor-pointer'>Blog</p>
        <p className='font-normal text-neutralSilver text-sm cursor-pointer'>Contact Us</p>
        <p className='font-normal text-neutralSilver text-sm cursor-pointer'>Pricing</p>
        <p className='font-normal text-neutralSilver text-sm cursor-pointer'>Testimonials</p>
      </div>
      <div className='flex flex-col gap-y-3 pl-[135px]'>
        <h4 className='my-3 text-white text-2xl font-semibold'>Support</h4>
        <p className='font-normal text-neutralSilver text-sm cursor-pointer'>Help Center</p>
        <p className='font-normal text-neutralSilver text-sm cursor-pointer'>Terms of Service</p>
        <p className='font-normal text-neutralSilver text-sm cursor-pointer'>Legal</p>
        <p className='font-normal text-neutralSilver text-sm cursor-pointer'>Privacy Policy</p>
        <p className='font-normal text-neutralSilver text-sm cursor-pointer'>Status</p>
      </div>
      <div className='flex flex-col gap-y-3 pl-[135px]'>
        <h4 className='my-3 text-white text-2xl font-semibold'>Stay up to date</h4>
        <div className='flex gap-x-3'>
         <input type="email" placeholder='Your Email Adress' className='bg-transparent text-sm text-white pl-2 border-solid border-2 rounded-xl border-lightGray'/>
         <Button text='Get News' className='py-2.5 px-5 bg-greenBrand-100 text-white rounded-md cursor-pointer text-sm font-medium mr-10 hover:bg-greenBrand-400'/>
        </div>
      </div>
    </footer>
  )
}
