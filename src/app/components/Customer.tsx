import Image from 'next/image'


export default function Customer() {
    return (
    <section className="px-36 flex items-center justify-between bg-neutralSilver my-12">
      <Image
        src="/image-9.png"
        width={441.53}
        height={328.99}
        alt="Image of the tesla's logo"
        className="my-[52px] pr-12"
      />
        <div>
            <p className="text-lightGray font-normal text-sm pt-4 pb-8">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <h4 className='text-xl text-greenBrand-100 font-semibold'>Tim Smith</h4>
            <p className='text-base text-lightGray font-normal'>British Dragon Boat Racing Association</p>
        <div>
        <div className='flex items-center gap-x-8 my-8'>
            <Image src='/Logo.svg' width={50} height={50} alt='A logo of a company'/>
            <Image src='/Logo-1.svg' width={50} height={50} alt='A logo of a company'/>
            <Image src='/Logo-2.svg' width={50} height={50} alt='A logo of a company'/>
            <Image src='/Logo-3.svg' width={50} height={50} alt='A logo of a company'/>
            <Image src='/Logo-4.svg' width={50} height={50} alt='A logo of a company'/>
            <Image src='/Logo-5.svg' width={50} height={50} alt='A logo of a company'/>
            <h4 className='text-xl text-greenBrand-100 font-semibold cursor-pointer pl-8'>Meet all customers &gt;</h4>
        </div>
        </div>
      </div>
    </section>
    )
}