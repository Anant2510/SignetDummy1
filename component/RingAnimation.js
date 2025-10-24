import Image from "next/image";
import ring from "@/public/images/ring.png";
import diamond from "@/public/images/Diamond_Sprite.png";

const RingAnimation = () => {
    return (
        <div className="w-[50%] relative pt-10">
            {/* Ring base */}
            <div className="inline-block h-full relative w-[1px]">
                <div className="h-[800px] relative origin-top w-[1166px]">
                    <Image
                        src={ring}
                        alt="ring"
                        className="absolute z-[1] left-[-316px] top-[64px] mix-blend-darken border border-transparent"
                        priority
                    />
                </div>
            </div>

            {/* Diamond overlay */}
            <Image
                src={diamond}
                alt="diamond"
                width={260} // increased size from 220 → 260
                height={260}
                className="absolute z-[2] top-[18%] left-[49%] transform -translate-x-1/2 scale-110 mix-blend-multiply opacity-100 brightness-125 contrast-[1.4] saturate-125 glow bgpo sparkle"
                priority
            />
        </div>
    );
};

export default RingAnimation;
