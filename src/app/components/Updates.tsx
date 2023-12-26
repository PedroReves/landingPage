import Image from 'next/image'

export default function Updates() {
    return (
        <section className="px-36">
            <h2 className="text-neutralGray font-semibold text-4xl/[44px] text-center">Caring is the new marketing</h2>
            <p className="text-center text-lightGray font-normal text-base pt-2">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See whos joining the community, read about how our community are increasing their membership income and lots more.​</p>
            <div className="flex gap-x-4 justify-center m-4">
                <div className='flex justify-center flex-col items-center'>
                    <Image src='/image-18.png' width={368} height={286} alt='An Image of a man using a notebook' className='w-auto'/>
                    <div className='text-center p-4 bg-neutralSilver w-[285px] h-33 rounded-lg relative bottom-6'>
                        <h3 className='text-xl font-semibold text-lightGray'>Creating Streamlined Safeguarding Processes with OneRen</h3>
                    </div>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <Image src='/image-19.png' width={368} height={286} alt='An Image of a notebook on top of a table'/>
                    <div className='text-center p-4 bg-neutralSilver w-[285px] h-33 rounded-lg relative bottom-6'>
                        <h3 className='text-xl font-semibold text-lightGray mb-2'>What are your responsibilities and how you manage them?</h3>
                    </div>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <Image src='/image-20.png' width={368} height={286} alt='An Image of a man using a notebook with hands'/>
                    <div className='text-center p-4 bg-neutralSilver w-[285px] h-33 rounded-lg relative bottom-6'>
                        <h3 className='text-xl font-semibold text-lightGray'>Revamping the Membership Model with Triathlon Australia</h3>
                   </div>
                </div>
            </div>
        </section>
    )
}