import { LogoData } from "@/app/utils/data"
import Image from "next/image"
import Link from "next/link"

const ShopLogo = () => {
    return (
        <>

            <ul className="flex justify-start  w-full max-w-[980px] md:max-w-[1200px] lg:max-w-[1590px] mx-auto px-4 list-none  relative z-20">
                {LogoData.map((item, index) => {
                    return <li key={index}> <Link href='/'> <Image src={item.image} alt="Lgog Images" /> </Link> </li>
                })}
            </ul>

        </>
    )
}

export default ShopLogo;