import Image from "next/image";

export default function Benefits() {
  return (
    <section>
      <h2 className="text-4xl/[44px] font-semibold text-center text-neutralGray pt-10">
        Manage your entire community in a single system
      </h2>
      <p className="text-lightGray text-center font-normal text-base pt-2">
        Who is Nextcent suitable for?
      </p>
      <div className="flex justify-between items-center gap-x-auto">
        <article className="text-center py-6 px-8">
          <Image
            src="/Icon.svg"
            width={48}
            height={48}
            alt="An Icon of a group of people"
            className="mx-auto"
          />
          <h3 className="font-bold text-2xl text-neutralGray pt-4">
            Membership Organisations
          </h3>
          <p className="text-lightGray font-normal text-sm pt-2">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </article>
        <article className="text-center py-6 px-8">
          <Image
            src="/Icon-1.svg"
            width={48}
            height={48}
            alt="An Icon of a building"
            className="mx-auto"
          />
          <h3 className="font-bold text-2xl text-neutralGray pt-4">
            National Associations
          </h3>
          <p className="text-lightGray font-normal text-sm pt-2">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </article>
        <article className="text-center py-6 px-8">
          <Image
            src="/Icon-2.svg"
            width={48}
            height={48}
            alt="An Icon of three hands"
            className="mx-auto"
          />
          <h3 className="font-bold text-2xl text-neutralGray pt-4">
            Clubs And Groups
          </h3>
          <p className="text-lightGray font-normal text-sm pt-2">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </article>
      </div>
    </section>
  );
}
