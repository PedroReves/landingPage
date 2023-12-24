import Image from 'next/image'
import Button from "./Button"

export default function Hero() {
  return(
    <section className='flex items-center py-[96px] px-[144px] bg-neutralSilver'>
      <div>
        <h1 className='font-semibold text-6xl text-neutralGray pb-1.5'>Lessons and insights<span className='font-semibold text-6xl text-greenBrand-100 pb-4'> from 8 years</span></h1>
        <p className='pb-8 text-base font-normal text-lightGray'>Where to grow your business as a photographer: site or social media?</p>
        <Button 
          text="Register"
          className="py-3.5 px-8 bg-greenBrand-100 text-white rounded-md cursor-pointer text-base font-medium mr-10 hover:bg-greenBrand-400"
        />
      </div>
      <Image 
        src='/Illustration.svg'
        width={391}
        height={407}
        alt='Tech Illustration'
      />
    </section>
  )
}
