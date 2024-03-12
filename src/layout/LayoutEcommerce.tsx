import Head from 'next/head';
//components
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
//css styles
import '../app/globals.css';


export default function LayoutEcommerce({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Suinfi</title>
      </Head>
      <div className='bg-ecommerce'>
      <Navbar />
      <main>{children}</main>
      <Footer />

      </div>
    </>
  );
}