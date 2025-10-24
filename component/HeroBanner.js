
import Image from 'next/image';
import HeroImage from '@/public/images/HPBanner.jpg';
import imageText from "@/public/images/HPBannerText.png";
import Button from '@/component/ui/Button';

const HeroBanner = () => {
    return (
        <>
            <div className="w-[100%]">
                <div className=' relative w-full h-[70vh] md:h-[90vh]'>
                    <Image src={HeroImage} alt="jamesallen" fill className=" object-cover" />
                    <div className=' absolute top-[45.5%] left-[4%] w-[49.21%] '>
                        <Image src={imageText} alt="jamesallen" className='mb-6' />
                        <div className='flex flex-wrap gap-4'>
                            <Button variant="v1" className=' flex gap-4'>Shop the Collection</Button>
                            <Button variant="v2">Shop Engagement</Button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroBanner;

