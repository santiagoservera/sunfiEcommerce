import { Navbar } from '@/components/Navbar';
import { SearchProduct } from '@/components/SearchProduct';
import LayoutEcommerce from '@/layout/LayoutEcommerce';

//components imports

export async function generateStaticParams() {
  return [{ query: "fallback" }];
}
export default function page() {
  return (
    <>
      <Navbar />
      <SearchProduct />;
    </>
  );
}
