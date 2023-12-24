import Button from "./Button";
import Image from "next/image";

export default function Unlock() {
  return (
    <section className="px-36 flex items-center justify-between">
      <Image
        src="/rafiki.svg"
        width={441.53}
        height={328.99}
        alt="An illustration of two people"
        className="my-[52px] pr-12"
      />
      <div>
        <h2 className="text-4xl font-semibold text-neutralGray">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-lightGray font-normal text-sm pt-4 pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button
          text="Learn More"
          className="py-3.5 px-8 bg-greenBrand-100 text-white rounded-md cursor-pointer text-base font-medium mr-10 hover:bg-greenBrand-400"
        />
      </div>
    </section>
  );
}
