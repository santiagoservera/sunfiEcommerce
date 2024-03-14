import { Navbar } from '@/components/Navbar';
import { SearchProduct } from '@/components/SearchProduct';
import LayoutEcommerce from '@/layout/LayoutEcommerce';

//components imports

export default function page() {
  return (
    <>
      <Navbar />
      <SearchProduct />;
    </>
  );
}
