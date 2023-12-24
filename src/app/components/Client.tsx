import Image from "next/image";

export default function Clients() {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center text-neutralGray pt-10">
        Our Clients
      </h2>
      <p className="text-center text-lightGray text-base font-normal pt-2">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex justify-between px-36 pt-4 my-10">
        <Image
          src="/Logo.svg"
          width={50}
          height={50}
          alt="Some Company Logo"
        />
        <Image
          src="/Logo-1.svg"
          width={50}
          height={50}
          alt="Some Company Logo"
        />
        <Image
          src="/Logo-2.svg"
          width={50}
          height={50}
          alt="Some Company Logo"
        />
        <Image
          src="/Logo-3.svg"
          width={50}
          height={50}
          alt="Some Company Logo"
        />
        <Image
          src="/Logo-4.svg"
          width={50}
          height={50}
          alt="Some Company Logo"
        />
        <Image
          src="/Logo-5.svg"
          width={50}
          height={50}
          alt="Some Company Logo"
        />
        <Image
          src="/Logo-6.svg"
          width={50}
          height={50}
          alt="Some Company Logo"
        />
      </div>
    </section>
  );
}
