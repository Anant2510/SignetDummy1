import { DIAMONDS_DATA } from "@/app/utils/data"
import Image from "next/image"
import Link from "next/link"

const CategoryCard = () => {

    return (
        <>

            <ul className="flex gap-3 mt-3.5 mr-3.5 ml-3.5  mb-8 ">
                {DIAMONDS_DATA.map((item) => {
                    return <li key={item.title} className="w-[20%]  relative"> <Link href='javascript:;' > <Image src={item.image} alt={item.title} className="w-full h-full" />
                        <span className=" absolute bottom-5 tracking-wider left-4 text-black">{item.title}</span> </Link> </li>
                })}
            </ul>
        </>
    )
}

export default CategoryCard;