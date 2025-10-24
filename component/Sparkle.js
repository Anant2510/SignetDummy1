import HeadingCom from "@/component/ui/HeadingCom"

import CollectionShowcase from "@/component/ui/CollectionShowcase"

const Sparkle = () => {
    return (
        <>
            <div className="bg-[#fbf8f3] pt-44 pb-44 bgtext relative">
                <HeadingCom
                    heading="the crowning"
                    subheading="jewels"
                    subline="Our diamond and gemstone fine jewelry collection offers hand-crafted pieces of unforgettable luxury that are perfect for any occasion."
                />

                <CollectionShowcase />
            </div>
        </>
    )
}

export default Sparkle;