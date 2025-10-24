import Button from "@/component/ui/Button";
import Link from "next/link";


const SectionIntro = (props) => {

    const { title, subtitle, description } = props;
    return (
        <>

            <div className="w-[58%] pl-[9%]  pt-[7%]">
                <h5 className=" text-3xl uppercase text-black">{title}</h5>
                <h1 className="text-black uppercase text-[42px]">{subtitle}</h1>
                <p className="text-black text-[18px] font-light  mb-10">{description}</p>

                <div className=" flex gap-2  justify-start items-center mb-4">
                    <Button variant="v3" className=" text-[5px]">start with a setting </Button>
                    <span className=" text-black">OR</span>
                    <Button variant="v3" className=" text-[5px]">start with a diamond </Button>
                </div>

                <div className=" flex gap-1  align-middle justify-start ">
                    <p className=" ">Make it easy with our</p>
                    <Link href='./' className=" text-[#ff8081] underline">ready-to-ship engagement rings.</Link>
                </div>

            </div>
        </>
    )
}

export default SectionIntro;