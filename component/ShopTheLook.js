
import Image from "next/image";
import HPSecondaryBanner from "@/public/images/HPSecondaryBanner.jpg"
import ShopLogo from "./ui/ShopLogo";

const ShopTheLook = () => {
    return (
        <>
            <ShopLogo />
            <div className="relative w-full max-w-[980px] md:max-w-[1200px] lg:max-w-[1590px] mx-auto px-4 h-[523px] mb-[105px]">

                <Image src={HPSecondaryBanner} fill className="object-cover object-top pr-4 pl-4" priority alt="text will come here ..." />
            </div>
        </>
    )
}

export default ShopTheLook;