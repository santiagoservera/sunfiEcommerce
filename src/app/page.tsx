import LayoutEcommerce from '@/layout/LayoutEcommerce';
import Image from 'next/image';
import { Products } from '@/components/Products';
import { Galery } from '@/components/Galery';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Carousel } from '@/components/Carousel';
export default function Home() {
  return (
    <LayoutEcommerce>
      <div className="bg-ecommerce">
        <Carousel />
        {/* <FeaturedProducts /> */}
        <Products />
        <Galery />
      </div>
    </LayoutEcommerce>
  );
}
