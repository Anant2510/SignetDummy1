
import SectionIntro from "@/component/ui/SectionIntro"
import RingAnimation from "@/component/RingAnimation"



const Design_Engagement = () => {
    return (
        <>

            <div className=" w-full max-w-[980px] md:max-w-[1200px] lg:max-w-[1590px] mx-auto px-4  pt-20">
                <div className="h-[860px] bg-top bg-[url('/images/bg.png')]   bg-no-repeat before:content-[''] after:content-[''] before:absolute after:absolute before:top-[11.7%] after:top-[11.7%] before:w-[100%] after:w-[100%] before:h-[28%] after:h-[28%] before:bg-[#fbf8f3] after:bg-[#fbf8f3] before:right-[91%] after:left-[91%] relative">
                    <div className=" flex justify-end items-start w-[100%]">
                        <SectionIntro title="design your own" subtitle="engagement ring"
                            description="Design your engagement ring your way. Start with a ring setting and then add the perfect center stone - or vice versa.
It's really up to you!" />

                        <RingAnimation />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Design_Engagement