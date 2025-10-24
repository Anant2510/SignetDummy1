import HeroContent from "@/component/HeroContent";
import CategoryCard from "@/component/CategoryCard";
import Design_Engagement from "@/component/Design_Engagement";
import ShopTheLook from "@/component/ShopTheLook";
import SliderSection from '@/component/ui/SliderSection';
import DiamondInspection from "@/component/DiamondInspection"
import { SliderRings, SliderRings2 } from "@/app/utils/data";
import Sparkle from '@/component/Sparkle'



const Home = () => {

  return (
    <>

      <HeroContent />
      <CategoryCard />
      <Design_Engagement />
      <ShopTheLook />
      <SliderSection heading="JAMES ALLEN'S BEST SELLING"
        subheading="Engagement Rings"
        data={SliderRings}
      />
      <DiamondInspection imageSrc="/images/diamond.png" ctaHref="/book" />
      <SliderSection heading="EXPERIENCE THE"
        subheading="DIAMOND REVOLUTION"
        subline="Spin actual diamonds in 360° HD and zoom in up to 40x. One of the world's biggest collections of loose diamonds, at your fingertips."
        data={SliderRings2}
      />
      <Sparkle />


    </>


  )
}

export default Home;