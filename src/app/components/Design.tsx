import Image from "next/image"
import Button from "./Button"

export default function Design() {
    return (
    <section className="px-36 flex items-center justify-between">
      <Image
        src="/pana.svg"
        width={441.53}
        height={328.99}
        alt="An illustration of a woman using a phone"
        className="my-[52px] pr-12"
      />
      <div>
        <h2 className="text-4xl font-semibold text-neutralGray">
            How to design your site footer like we did
        </h2>
        <p className="text-lightGray font-normal text-sm pt-4 pb-8">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, 
            massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. 
            In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod 
            augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur 
            quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button
          text="Learn More"
          className="py-3.5 px-8 bg-greenBrand-100 text-white rounded-md cursor-pointer text-base font-medium mr-10 hover:bg-greenBrand-400"
        />
      </div>
    </section>
    )
}