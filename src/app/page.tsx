import LayoutEcommerce from '@/layout/LayoutEcommerce';
import Image from 'next/image';
import { Products } from '@/components/Products';
export default function Home() {
  return (
    <LayoutEcommerce>
      <div className="bg-ecommerce">
        <Products />
      </div>
    </LayoutEcommerce>
  );
}
