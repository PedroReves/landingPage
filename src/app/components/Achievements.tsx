import Image from "next/image";

export default function Achievements() {
  return (
    <section className="bg-neutralSilver flex flex-row wrap px-36 py-16">
      <div>
        <h2 className="text-neutralGray font-semibold text-4xl/[44px]">
          Helping a local <span className="text-greenBrand-100">
            business reinvent itself
          </span>
        </h2>
        <p className="text-base font-normal text-darkGray">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className='flex items-center m-6'>
        <Image
          src="/People.svg"
          width={50}
          height={50}
          alt="An icon of a group of persons"
          className="pr-4"
        />
        <div>
          <h2 className="text-3xl font-bold text-neutralGray">2,245,341</h2>
          <p className="font-normal text-base text-lightGray">Members</p>
        </div>
      </div>
      <div className="flex items-center m-6">
        <Image
          src="/Hands.svg"
          width={50}
          height={50}
          alt="An icon of three hands"
          className="pr-4"
        />
        <div>
          <h2 className="text-3xl font-bold text-neutralGray">46,328</h2>
          <p className="font-normal text-base text-lightGray">Clubs</p>
        </div>
      </div>
      <div className="flex items-center m-6">
        <Image
          src="/Clicking.svg"
          width={50}
          height={50}
          alt="An icon of a finger clicking"
          className="pr-4"
        />
        <div>
          <h2 className="text-3xl font-bold text-neutralGray">828,867</h2>
          <p className="font-normal text-base text-lightGray">Event Bookings</p>
        </div>
      </div>
      <div className="flex items-center m-6">
        <Image
          src="/Card.svg"
          width={50}
          height={50}
          alt="An Icon of a credit card"
          className="pr-4"
        />
        <div>
          <h2 className="text-3xl font-bold text-neutralGray">1,926,436</h2>
          <p className="font-normal text-base text-lightGray">Payments</p>
        </div>
      </div>
    </section>
  );
}
