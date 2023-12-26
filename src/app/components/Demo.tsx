import Button from "./Button";

export default function Demo() {
    return (
        <section className="px-36 bg-neutralSilver flex items-center justify-center flex-col">
            <h2 className="text-6xl/[76px] pb-8 text-center font-semibold w-3/6 text-neutralBlack py-8">Pellentesque suscipit fringilla libero eu.</h2>
            <Button text="Get a Demo &gt;" className="py-3.5 px-8 m-6 bg-greenBrand-100 text-white rounded-md cursor-pointer text-base font-medium mr-10 hover:bg-greenBrand-400"/>
        </section>
    )
}